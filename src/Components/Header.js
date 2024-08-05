const HeaderHTML = () => {
  const fatherContainer =  document.querySelector('#app')
  const newDiv = document.createElement('div');
  fatherContainer.appendChild(newDiv)

    newDiv.innerHTML = `
      <div class="infoContainer">
        <h1>Learning Three.js!</h1>
        <p>Showcase of My Skills in Learning Three.js</p>
       </div>
    `
}


export default HeaderHTML