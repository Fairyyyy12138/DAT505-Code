//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#DDDDFF");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );
  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
  //start
  var light = new THREE.DirectionalLight( 0xffffff );
  				light.position.set( 0, 0, 1 );
  				scene.add( light );
  				// shadow
  				var canvas = document.createElement( 'canvas' );
  				canvas.width = 128;
  				canvas.height = 128;
  				var context = canvas.getContext( '2d' );
  				var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
  				gradient.addColorStop( 0.1, 'rgba(210,210,210,1)' );
  				gradient.addColorStop( 1, 'rgba(255,255,255,1)' );
  				context.fillStyle = gradient;
  				context.fillRect( 0, 0, canvas.width, canvas.height );
  				var shadowTexture = new THREE.CanvasTexture( canvas );
  				var shadowMaterial = new THREE.MeshBasicMaterial( { map: shadowTexture } );
  				var shadowGeo = new THREE.PlaneBufferGeometry( 300, 300, 1, 1 );
  				var shadowMesh;
  				shadowMesh = new THREE.Mesh( shadowGeo, shadowMaterial );
  				shadowMesh.position.y = - 250;
          shadowMesh.position.x = - 400;
  				shadowMesh.rotation.x = - Math.PI / 2;
  				scene.add( shadowMesh );
}


function geometry(){
  // Create a Cube Mesh with basic material ---------
  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 1);
scene.add(light2);

  geometry1 = new THREE.SphereGeometry( 150, 12, 32 );
  material1 = new THREE.MeshBasicMaterial( { color: "#FFD9EC" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh1 );

  geometry2 = new THREE.IcosahedronBufferGeometry(158, 1)
  material2 = new THREE.MeshNormalMaterial( {wireframe :true} );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  border2= new THREE.EdgesHelper(mesh2,0xffff00);
  mesh2.position.z = -1000;

  geometry3 = new THREE.IcosahedronBufferGeometry(200, 1)
  material3 = new THREE.MeshNormalMaterial( {wireframe :true} );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  border3= new THREE.EdgesHelper(mesh3,0xffff00);
  mesh3.position.z = -1000;


  // Add mesh to scene
  scene.add( mesh2 );
  scene.add( border2 );

  scene.add( mesh3 );
  scene.add( border3 );
}

var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;

  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.02;

  mesh3.rotation.x += 0.05; //Continuously rotate the mesh
  mesh3.rotation.y += 0.04;
  renderer.setClearColor(" #DDDDFF");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
