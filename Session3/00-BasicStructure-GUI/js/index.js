//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
var de2ra = function(degree){
  return degree*(Math.PI/180);
};

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#FFCCFF");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(100, 100, 100);
  material = new THREE.MeshBasicMaterial( {
  color: "#6699CC"
   } );
  mesh = new THREE.Mesh( geometry, material);
  mesh.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh );

  var controller = new function() {
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;

    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = -400;

    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;

    this.BoxColor = color;

}

var gui = new dat.GUI();

var f1 = gui.addFolder('Scale');
var f2 = gui.addFolder('Position');
var f3 = gui.addFolder('Rotation');

f1.add(controller,'scaleX', 0.1, 5).onChange( function() {
  mesh.scale.x = (controller.scaleX);
});

f1.add(controller,'scaleY', 0.1, 5).onChange( function() {
  mesh.scale.y = (controller.scaleY);
});

f1.add(controller,'scaleZ', 0.1, 5).onChange( function() {
  mesh.scale.z = (controller.scaleZ);
});



f2.add(controller,'positionX', -500, 500).onChange( function() {
  mesh.position.x = (controller.positionX);
});

f2.add(controller,'positionY', -500, 500).onChange( function() {
  mesh.position.y = (controller.positionY);
});

f2.add(controller,'positionZ', -5000, -400).onChange( function() {
  mesh.position.z = (controller.positionZ);
});



f3.add(controller,'rotationX', -180, 180).onChange( function() {
  mesh.rotation.x = de2ra(controller.rotationX);
});

f3.add(controller,'rotationY', -180, 180).onChange( function() {
  mesh.rotation.y = de2ra(controller.rotationY);
});

f3.add(controller,'rotationZ', -180, -180).onChange( function() {
  mesh.rotation.z = de2ra(controller.rotationZ);
});

gui.addColor( controller, 'boxColor',color ).onChange( function() {
  mesh.material.color.setHex( dec2hex(controller.boxColor) );
});
gui.add( controller, 'boxOpacity', 0.1, 3 ).onChange(function() {
  material.opacity = (controller.boxOpacity);

});
}
// Render Loop
var render = function () {
  requestAnimationFrame( render );

  //mesh.rotation.x += 0.01; //Continuously rotate the mesh
//  mesh.rotation.y += 0.01;

  renderer.setClearColor("#FFCCFF");

  // Render the scene
  renderer.render(scene, camera);
};

init();
render();
