Session1
------------
In this secssion we introduced Three.js.

#### Description ####
Create a geometry and rotate it.And also studied how to change the geometry and the background's color.In the homework,i also tried to create the DirectionalLight.

#### Usage ####
```html
<script src="build/three.js"></script>
<script src="js/index.js"></script>
```
* The code creates a scene, a camera and renderer.It also creates the geometry and its materials and the mesh.

```javascript
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

function geometry(){
  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 1);
scene.add(light2);

  geometry1 = new THREE.SphereGeometry( 150, 12, 32 );
  material1 = new THREE.MeshBasicMaterial( { color: "#FFD9EC" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;
scene.add( mesh1 );

```
