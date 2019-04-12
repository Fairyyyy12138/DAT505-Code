Session4
------------
In this session we introduced ArrayMesh with random velocity.
#### Description ####
Make the cubes static and make just two of them Random rotation.
#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```
```javascript
var renderer, scene, camera;
var cubes = [];
var rot = 0;
var randomSpeedX = [];

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

      mesh.position.x = x;
      mesh.position.z = y;
      mesh.scale.y = 1;
      rotValue = Math.random() * 2 * Math.PI;
      mesh.rotation.x = rotValue;
      mesh.rotation.y = rotValue;
      mesh.rotation.z = rotValue;

var randomValueX = (Math.random() * 0.1) - 0.05;
randomSpeedX.push(randomValueX);

console.log( "randomSpeedX")
      scene.add(mesh);
      cubes.push(mesh);
    }
  }

  document.body.appendChild(renderer.domElement);
}


function drawFrame(){
  requestAnimationFrame(drawFrame);

  console.log("randomSpeedX");

  cubes[6].rotation.x += randomSpeedX[6];
  cubes[18].rotation.x += randomSpeedX[18];
  ```
