Session7
------------
In this session we introduced examples of cube appearing randomly and deforming and eyeballs follow the mouse.
#### Description ####
In the homework,i tried many different ways to make all the eyeballs follow the mouse, finally it works.
#### Usage ####
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```
```javascript
var geometry = new THREE.SphereGeometry( 30, 32, 16 );

var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for ( i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  for ( var j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
  }
}

  var cubesscale = Math.random()* 0.5;
  mesh = new THREE.Mesh( geometry, material );
      mesh.position.x = Math.random() * 400 - 200;
      mesh.position.y = Math.random() * 400 - 200;
      mesh.position.z = Math.random() * 400 - 200;
      mesh.scale.x = cubesscale;
      mesh.scale.y =cubesscale;
       mesh.scale.z = cubesscale;

      scene.add( mesh );
      cubes.push(mesh);
}

renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );
}
```
