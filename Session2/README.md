Session2
------------
In this session we introduced  the usage of different materials.

#### Usage ####
```html
<script src="build/three.js"></script>
<script src="js/index.js"></script>
```
* The code creates a scene, a camera and renderer.It also creates three different geometries and give them different materials.

```javascript

var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;

function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("#D2E9FF");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );
}

function geometry(){
  var texture = new THREE.TextureLoader().load( "texture.png");

  var material1 = new THREE.MeshBasicMaterial( { map: texture} );

  geometry1 = new THREE.SphereGeometry( 85, 12, 32 );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.x = -250;
  mesh1.position.z = -1000;

  scene.add( mesh1 );

  var texture = new THREE.TextureLoader().load( "texture.jpg");

  var material2 = new THREE.MeshBasicMaterial( { map: texture} );

  geometry2 = new THREE.SphereGeometry( 85, 12, 32 );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.x = 0;
  mesh2.position.z = -1000;

  scene.add( mesh2 );

  var texture = new THREE.TextureLoader().load( "brick_diffuse.jpg");

  var material3 = new THREE.MeshBasicMaterial( { map: texture} );

  geometry3 = new THREE.SphereGeometry( 85, 12, 32 );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.x = 250;
  mesh3.position.z = -1000;

  scene.add( mesh3 );
}
```
