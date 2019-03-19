//Global variables
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#D2E9FF");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  var texture = new THREE.TextureLoader().load( "texture.png");

  var material1 = new THREE.MeshBasicMaterial( { map: texture} );

  geometry1 = new THREE.SphereGeometry( 85, 12, 32 );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.x = -250;
  mesh1.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh1 );

  var texture = new THREE.TextureLoader().load( "texture.jpg");

  var material2 = new THREE.MeshBasicMaterial( { map: texture} );

  geometry2 = new THREE.SphereGeometry( 85, 12, 32 );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.x = 0;
  mesh2.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh2 );

  var texture = new THREE.TextureLoader().load( "brick_diffuse.jpg");

  var material3 = new THREE.MeshBasicMaterial( { map: texture} );

  geometry3 = new THREE.SphereGeometry( 85, 12, 32 );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.x = 250;
  mesh3.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh3 );
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;

  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.01;

  mesh3.rotation.x += 0.01; //Continuously rotate the mesh
  mesh3.rotation.y += 0.01;

  renderer.setClearColor("#D2E9FF");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
