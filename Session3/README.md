Session3
------------
In this session we studied GUI.

#### Description ####
Create a cube and change its scale, position and rotation.
#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/dat.gui.min.js"></script>
```
```javascript
var scene, camera, renderer;
var geometry, material, mesh, threejs, color;

var WIDTH = window.innerWidth,
HEIGHT = window.innerHeight;

var gui = null;

var de2ra = function(degree) {
  return degree*(Math.PI/180);
};

var controller = new function() {
  this.scaleX = 1;
  this.scaleY = 1;
  this.scaleZ = 1;
  this.positionX = 0;
  this.positionY = 0;
  this.positionZ = 0;
  this.rotationX = 0;
  this.rotationY = 0;
  this.rotationZ = 0;
  this.boxColor = color;
  this.boxOpacity = 1;
}();

var gui = new dat.GUI();
var f1 = gui.addFolder('Scale');
f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
  mesh.scale.x = (controller.scaleX);
});
f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  mesh.scale.y = (controller.scaleY);
});
f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  mesh.scale.z = (controller.scaleZ);
});

var f2 = gui.addFolder('Position');
f2.add(controller, 'positionX', -5, 5).onChange( function() {
  mesh.position.x = (controller.positionX);
});
f2.add(controller, 'positionY', -5, 5).onChange( function() {
  mesh.position.y = (controller.positionY);
});
f2.add(controller, 'positionZ', -5, 5).onChange( function() {
  mesh.position.z = (controller.positionZ);
});

var f3 = gui.addFolder('Rotation');
f3.add(controller, 'rotationX', -180, 180).onChange( function() {
  mesh.rotation.x = de2ra(controller.rotationX);
});
f3.add(controller, 'rotationY', -180, 180).onChange( function() {
  mesh.rotation.y = de2ra(controller.rotationY);
});
f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
  mesh.rotation.z = de2ra(controller.rotationZ);
});
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh.material.color.setHex( dec2hex(controller.boxColor) );
});
```
