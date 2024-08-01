const customObj1 = (THREE) => {
     //const geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4)

    const geometry = new THREE.BufferGeometry()

    const count = 50
    const positionArray = new Float32Array(count * 3 * 3)

    for (let i = 0; i < count * 3 * 3; i++) {
        positionArray[i] = Math.random() - 0.5
    }

    const positionAttribute = new THREE.BufferAttribute(positionArray, 3)

    geometry.setAttribute('position', positionAttribute)


    const material = new THREE.MeshBasicMaterial({ color: 'blue', wireframe: true })
    const cubeMesh = new THREE.Mesh(geometry, material)
    //cubeMesh.position.set(4, 1, 0)
    return cubeMesh;
}

export default customObj1