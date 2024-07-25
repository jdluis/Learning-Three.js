


// first camera
const mainCamera = (THREE, sizes) => {
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3
    camera.position.x = 1

    return camera
}

const activateCameraControls = (camera) => {
    const moveSpeed = 0.1;
    const zoomSpeed = 0.1;
    console.log("hola")

    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "w":
                console.log("w")
                camera.position.y += moveSpeed;
                break;
            case "s":
                console.log("s")
                camera.position.y -= moveSpeed;
                break;
            case "a":
                camera.position.x -= moveSpeed;
                break;
            case "d":
                camera.position.x += moveSpeed;
                break;
            case "q":
                camera.position.z -= zoomSpeed;
                break;
            case "e":
                camera.position.z += zoomSpeed;
                break;
        }
    });
};

export { mainCamera, activateCameraControls };