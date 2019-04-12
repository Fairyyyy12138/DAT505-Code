Session5
------------
In this session we studied objects are randomly scaled and rotated within the range.
#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```
* Create the cubes and give it randomSpeed.

```javascript
var renderer, scene, camera;
var cubes = [];
var rot = 0;
var randomSpeedX = [];

var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
mesh.position.x = x;
mesh.position.z = y;
mesh.scale.y = 10;
var rotValue = Math.random() * 2 * Math.PI;
mesh.rotation.x = rotValue;
mesh.rotation.y = rotValue;
mesh.rotation.z = rotValue;

var randomValueX = (Math.random() * 0.1) - 0.03;
randomSpeedX.push(randomValueX);

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
c.rotation.x += 0.05
c.rotation.y += 0.01
c.scale.x = scaleCube;
});
cubes[6].rotation.x += randomSpeedX[6];
cubes[18].rotation.x += randomSpeedX[18];
renderer.render(scene, camera);
}
```
