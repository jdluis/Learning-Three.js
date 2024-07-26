
// first camera
const mainCamera = (THREE, sizes) => {
    // PerspectiveCamera

    const camera = new THREE.PerspectiveCamera(69, sizes.width / sizes.height, 0.5, 50)
    //camera.position.x = 5
    //camera.position.y = 2
    // camera.position.z = 5

    // OrthographicCamera

    // const aspectRadio = sizes.width / sizes.height
    // const camera = new THREE.OrthographicCamera(
    //     -1 * aspectRadio, 
    //     1 * aspectRadio, 
    //     1, 
    //     -1, 
    //     0.1, 
    //     100
    // )

    return camera
}

export { mainCamera };