


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

const activateCameraControls = (camera) => {
    const moveSpeed = 0.1;
    const zoomSpeed = 0.1;

    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "w":
            case "W":
                camera.position.y += moveSpeed;
                break;
            case "s":
            case "S":
                camera.position.y -= moveSpeed;
                break;
            case "a":
            case "A":
                camera.position.x -= moveSpeed;
                break;
            case "d":
            case "D":
                camera.position.x += moveSpeed;
                break;
            case "q":
            case "Q":
                camera.position.z -= zoomSpeed;
                break;
            case "e":
            case "E":
                camera.position.z += zoomSpeed;
                break;
        }
    });
};

export { mainCamera, activateCameraControls };