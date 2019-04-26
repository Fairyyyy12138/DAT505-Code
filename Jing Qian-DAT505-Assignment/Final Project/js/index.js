var camera, scene, renderer, composer;
var light;
var object;

init();
animate();
function init() {

// Set scene and camera
scene = new THREE.Scene();
//scene.fog = new THREE.Fog( 0x000000, 1, 1000 );

var aspectRatio = window.innerWidth/window.innerHeight;

camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,10000);
// Move the camera
camera.position.z = 10;
camera.position.y = 0;

// Set the DOM
renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor("#600030");
document.body.appendChild(renderer.domElement);

object = new THREE.Object3D();
scene.add( object );

scene.add( new THREE.AmbientLight( 0xffffff ) );

window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	composer.setSize( window.innerWidth, window.innerHeight );
	}


function animate() {
	requestAnimationFrame( animate );
	object.rotation.x += 0.005;
	object.rotation.y += 0.01;
	}
// Point Light
var pointLight1 = new THREE.PointLight( "#FF0000", 100, 10 );
pointLight1.position.set( 0,0, 20 );
scene.add(pointLight1);

var pointLight2 = new THREE.PointLight( "#FC0202", 100, 10 );
pointLight2.position.set( 0,0, -20 );
scene.add(pointLight2);

function loadModel() {
  object.traverse( function ( child ) {
    if ( child.isMesh ) child.material.map = texture;
  } );
  object.position.y = 0;
  object.position.z = 0;
  scene.add( object );

}

var myMaterials = [];
var rose ;
var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
};
var onError = function ( xhr ) { };

var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'models/obj/male02/' );
    mtlLoader.load( 'rose.mtl', function( materials ) {
        materials.preload();
				for (var key in materials.materials){
					materials.materials[key].side = THREE.DoubleSide;
					myMaterials.push(materials.materials[key]);
				}


        var objLoader = new THREE.OBJLoader();
      	 	objLoader.setMaterials( materials );
      		objLoader.setPath( 'models/obj/male02/' );
       		objLoader.load( 'rose.obj', function ( object ) {

						rose = object;
            scene.add( rose );
            rose.position.set(0,0,0);
            rose.scale.set(1,1,1);
            rose.rotation.set(Math.PI/1.9,0,0.2);
        }, onProgress, onError );
    });


var cantidad = 40;
var shapes = [];

for (var i = 0; i < cantidad; i++) {

    if(Math.random()<0.5){
        var geometry = new THREE.RingGeometry( 4, 40, 30 );
    }else{
        var geometry = new THREE.RingGeometry( 30, 30, 50 );
    }



    if(i%7===0){
        var material = new THREE.MeshPhongMaterial( { color: "#FF2D2D"} );
    }else if(i%2===0){
        var material = new THREE.MeshPhongMaterial( { color: "#A52A2A"} );
    }else{
        var material = new THREE.MeshPhongMaterial( { color: "#FFECF5"} );
    }
    var mesh = new THREE.Mesh(geometry,material);
    mesh.position.z = -i*1;
    mesh.rotation.z= i;
    shapes.push(mesh);
    scene.add(mesh);
}

// Variables
var time = 0;

// Render function
var render = function(){
    requestAnimationFrame(render);
    time++;
//玫瑰花延Y轴旋转
	if(rose){

		rose.rotation.y -= 0.02;
	}

    for (var i = 0; i < cantidad; i++) {
        shapes[i].position.z+=0.2;
        shapes[i].rotation.z+=0.02;


        shapes[i].scale.x=1+Math.sin(i+time*0.1)*0.1;
        shapes[i].scale.y=1+Math.sin(i+time*0.1)*0.07;
        shapes[i].scale.z=1+Math.sin(i+time*0.1)*0.07;

        var valor = 0.5 + Math.sin(time*0.05)*5;

        if(Math.random()<valor){
            shapes[i].material.wireframe = true;
            shapes[i].material.wireframeLinewidth = Math.random()*3;
        }else{

            shapes[i].material.wireframe = false;
        }

        if(shapes[i].position.z>10){
            shapes[i].position.z = -70;
            shapes[i].rotation.z=i;
        }
    }

//点光源的强度和位置
    pointLight1.intensity = Math.abs(Math.sin(time*0.2)*2);
    pointLight2.intensity = Math.abs(Math.cos(time*0.2)*2);
    pointLight1.position.z = Math.abs(Math.sin(time*0.02)*30);
    pointLight2.position.z = Math.abs(Math.cos(time*0.02)*30);



    //composer.render();
    renderer.render(scene,camera);
}
loadModel();
render();
onWindowResize();
