Session6
------------
In this session we introduced CityScape.
#### Description ####
In the exercise,we try to turn geometry into wireframe.
#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/FirstPersonControls.js"></script>
<script src="js/index.js"></script>
```
```javascript
function setupWorld() {
  var geo = new THREE.PlaneGeometry(20, 20);
  var mat = new THREE.MeshPhongMaterial({color: 0x9db3b5, wireframe: true});
  floor = new THREE.Mesh(geo, mat);
  floor.rotation.x = -0.5 * Math.PI;
  floor.receiveShadow = true;
  scene.add(floor);

  var geometry = new THREE.CubeGeometry( 1, 1, 1 );
  var material = new THREE.MeshPhongMaterial({wireframe: true, color: 0xcccccc});

  var cityGeometry = new THREE.Geometry();
  for (var i = 0; i < 300; i++) {
    var building = new THREE.Mesh(geometry.clone());

    building.position.x = Math.floor( Math.random() * 200 - 100 ) * 4;
    building.position.z = Math.floor( Math.random() * 200 - 100 ) * 4;
    building.position.y = Math.floor( Math.random() * 100 - 50 );

    building.scale.x  = 10;
    building.scale.y  = 10;
    building.scale.z  = 10;
```
