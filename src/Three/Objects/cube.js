const cubeObj = (THREE) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 'red' })
    const cubeMesh = new THREE.Mesh(geometry, material)
    return cubeMesh;
}

export default cubeObj