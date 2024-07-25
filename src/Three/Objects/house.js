const houseObjGroup = (THREE) => {
    const group = new THREE.Group()
    const floor = new THREE.Mesh(
        new THREE.BoxGeometry(3.3,0.3, 4),
        new THREE.MeshBasicMaterial({color: 0x9a5e51})
    )
    
    const wallL= new THREE.Mesh(
        new THREE.BoxGeometry(0.3,2,4),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )

    wallL.position.x = 1.5
    wallL.position.y = 1.15

    const wallR = new THREE.Mesh(
        new THREE.BoxGeometry(0.3,2,4),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )

    wallR.position.x = -1.5
    wallR.position.y = 1.15
    const wallF = new THREE.Mesh(
        new THREE.BoxGeometry(0.3,3,3),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )

    const wallB = new THREE.Mesh(
        new THREE.BoxGeometry(0.3,3,3),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )

    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(3.3,0.3, 4),
        new THREE.MeshBasicMaterial({color: "yellow"})
    )

    roof.position.set(0, 2.3, 0)

    group.add(floor, roof, wallL, wallR)

    return group
}

export default houseObjGroup