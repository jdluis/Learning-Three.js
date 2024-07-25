const HeaderHTML = () => {
    document.querySelector('#app').innerHTML = `
      <div>
        <h1>Learning Three.js!</h1>
        <p>Showcase of My Skills in Learning Three.js</p>
        <div id="camera_controls"> 
          <div id="control_move">
            <button id="zoom_in">Q</button>
            <button id="move_up">W</button>
            <button id="zoom_out">E</button>
            <div>
              <button id="move_left">A</button>
              <button id="move_right">D</button>
            </div>
            <button id="move_down">S</button>
          </div
         </div>
         <div id="controls_labels">
            <ul>
              <li>W: Move Up</li>
              <li>S: Move Down</li>
              <li>R: Move Right</li>
              <li>L: Move Left</li>
            </ul>
             <ul>
              <li>Q: Zoom In</li>
              <li>E: Zoom Out</li>
            </ul>
         </div>
       </div>
    `
}


export default HeaderHTML