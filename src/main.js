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
const {cube} = MyObjs(THREE)

scene.add(cube)

// Sizes
const sizes = {
  width: 800,
  height: 800
}

// Camera
const camera = mainCamera(THREE, sizes)
scene.add(camera)
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