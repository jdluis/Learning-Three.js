import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import gsap from 'gsap'
import HeaderHTML from './Components/Header'
import { mainCamera } from './Three/Cameras'
import MyObjs from './Three/Objects'
import GUI from 'lil-gui'
import cubeObj from './Three/Objects/cube'

/*
* Debug
*/
const gui = new GUI();

// Coursor

const cursor = {
  x: 0,
  y: 0
}

window.addEventListener('mousemove', (e) => {

  //set client x and y to 0/1 values and - y + 
  cursor.x = e.clientX / sizes.width - 0.5
  cursor.y = - (e.clientY / sizes.height - 0.5)
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

//Render component
HeaderHTML();

// Scene
const scene = new THREE.Scene()

// Objects
// All my Objects
const { cube, house, customObj1 } = MyObjs(THREE)
scene.add(cube, house, customObj1)

// Sizes
let sizes = {
  // width: 800,
  // height: 600
  width: window.innerWidth,
  height: window.innerHeight
}

// FullScreen and Resize //
// Listeng the resize of the window for new sizes.
window.addEventListener("resize", () => {
  // Updates Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  // Pixel Ratio: Update when resize
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// FullScreen, on doble click or other
window.addEventListener("dblclick", () => {
  // For Safari and any browsers
  const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen()
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (documentwebkitExitFullscreen) {
      document.documentwebkitExitFullscreen()
    }

  }
})

//Axes helper
const axesHelper = new THREE.AxesHelper()
//scene.add(axesHelper);

// Camera
const camera = mainCamera(THREE, sizes)
camera.position.z = 3
scene.add(camera)

// Scale Obj
cube.scale.set(1, 0.5, 0.5)

// Move Obj
cube.position.set(4, 1, 0)
// Move Group
house.position.set(4, 0, 0)

// Rotate Obj
cube.rotation.reorder("XYZ"); //For Order rotation
cube.rotation.x = Math.PI * .15;
cube.rotation.y = Math.PI * .25;
cube.rotation.z = Math.PI * .25;

// Quaternion (update the rotation)

// Turn an Object to look to another obj/vector
//camera.lookAt(house.position)

// Orbit Controller
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Render
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
// Pixel Ratio of 2 is more than enough for our eyes.
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)

//Clock, the same of Time
const clock = new THREE.Clock()

// Debug
gui
  .add(cubeObj.position, 'y')
  .min(-3)
  .max(3)
  .step(0.01)
  .name("elevation")


//Library for animation, had ther own tick
//gsap.to(cube.position, {duration: 1, delay: 1, x:  2})
//gsap.to(cube.position, {duration: 1, delay: 2, x:  4})

//Animations
const tick = () => {
  // Clock, same of before in one line
  const elapsedTime = clock.getElapsedTime()

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick()


//WARNING, DONT USE getDelta === problems.