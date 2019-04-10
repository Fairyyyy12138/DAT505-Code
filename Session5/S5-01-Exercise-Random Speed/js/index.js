var renderer, scene, camera;
var cubes = [];
var rot = 0;
var randomSpeedX = [];//随机速度

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <= 10; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -10; y <= 10; y += 5) {

      var boxGeometry = new THREE.OctahedronBufferGeometry(4);
      //The color of the material is assigned a random color
      //var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});

      /*if (x==-5 && y==-5){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF00FF});
      }else if (x==5 && y==5){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF00});
      }else{
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      }*/ //选定颜色
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);//随机颜色
      //mesh.castShadow = true;

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.scale.y = 20;
      var rotValue = Math.random() * 2 * Math.PI;//随机旋转方向
      mesh.rotation.x = rotValue;
      mesh.rotation.y = rotValue;
      mesh.rotation.z = rotValue;

var randomValueX = (Math.random() * 0.1) - 0.05;//随机速度值-0.05到0.05
randomSpeedX.push(randomValueX);//将值给随机速度

console.log( "randomSpeedX")
      scene.add(mesh);
      cubes.push(mesh);
    }
  }

  document.body.appendChild(renderer.domElement);
}

var scaleCube = -3;

function drawFrame(){
  requestAnimationFrame(drawFrame);
 //console.log(randomSpeedX);
  //rot += 0.1;
  scaleCube += 0.02;
  if (scaleCube > 3) scaleCube =-3;

  cubes.forEach(function(c,i){
  c.rotation.x += 0.01
  c.rotation.y += 0.01
  c.scale.x = scaleCube;
});
  cubes[6].rotation.x += randomSpeedX[6];
  cubes[18].rotation.x += randomSpeedX[18];
  renderer.render(scene, camera);
}

init();
drawFrame();
