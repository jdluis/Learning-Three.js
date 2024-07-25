import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
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
const { cube, house } = MyObjs(THREE)

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
house.position.set(4, 0, 0)

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

//Clock, the same of Time
//const clock = new THREE.Clock()

//Library for animation, had ther own tick
gsap.to(cube.position, {duration: 1, delay: 1, x:  2})
gsap.to(cube.position, {duration: 1, delay: 2, x:  4})

//Animations
const tick = () => {
  // Clock, same of before in one line
  // const elapsedTime = clock.getElapsedTime()

  //Update Objects
  // cube.rotation.y = Math.sin(elapsedTime) 
  // cube.rotation.x = Math.cos(elapsedTime) 
  // camera.lookAt(cube.position)

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick()


//WARNING, DONT USE getDelta === problems.