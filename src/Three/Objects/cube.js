const cubeObj = (THREE) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 'red' })
    const cube = new THREE.Mesh(geometry, material)
    return cube;
}

export default cubeObj