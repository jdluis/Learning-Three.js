import './style.css'
import * as THREE from 'three'
import HeaderHTML from './Components/Header'
import MyObjs from './Three/Objects'
import { activateCameraControls, mainCamera } from './Three/Cameras'
// Canvas
const canvas = document.querySelector('canvas.webgl')

//Render component
HeaderHTML();

// Scene
const scene = new THREE.Scene()

// Objects
// All my Objects
const {cube, house} = MyObjs(THREE)

scene.add(cube, house)

// Sizes
const sizes = {
  width: 800,
  height: 800
}

//Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper);

// Camera
const camera = mainCamera(THREE, sizes)
camera.position.x = 5
camera.position.z = 5
camera.position.y = 2
scene.add(camera)

// Scale Obj
cube.scale.set(1, 0.5, 0.5)

// Move Obj
cube.position.x = 4;
cube.position.y = 1;

// Move Group
house.position.set(4,0,0)

// Rotate Obj
cube.rotation.reorder("XYZ"); //For Order rotation
cube.rotation.x = Math.PI * .15;
cube.rotation.y = Math.PI * .25;
cube.rotation.z = Math.PI * .25;

// Quaternion (update the rotation)

// Turn an Object to look to another obj/vector
camera.lookAt(house.position)

//Camera controls
activateCameraControls(camera)


// Render
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();