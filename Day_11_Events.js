// Exercises level 1 - 8
// Display the coordinate of the view port when a mouse is moving on the body?

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state={
    x:0,
    y:0,
    globalx:0,
    globaly:0
  }

  handleMouseMove = event => {
    //the first one is make 0,0 point for the div, your div top left is 0,0
    this.setState({x: event.clientX - event.target.offsetLeft, y: event.clientY - event.target.offsetTop})
    //this one makes 0,0 your top left of your screen, for example if your screen size is 1980x1080, bottom right global xy values are 1980 1080, top lefts are 0 0
    this.setState({globalx: event.screenX, globaly: event.screenY})
  };


  render() {
    return(
      <div style={{display:'flex',justifyContent:'center', alignItems:'center',width:'100%', height:'100vh'}} onMouseMove={this.handleMouseMove}>
      LOCAL (X:{this.state.x}, Y:{this.state.y})
      GLOBAL (X:{this.state.globalx}, Y:{this.state.globaly})
      </div>
    )
  }
}
// i export the App to index.js, i work on App.js
export default App
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)