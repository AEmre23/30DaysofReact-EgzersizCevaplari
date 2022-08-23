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



// ------------------------------------------------------------------------------------------ //
// Exercises Level 2
// Implement the following using onMouseEnter event

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state={
    top:'30%',
    left:'50%',
    display1:'block',
    display2:'none'
  }

  handleMouseMove = event => {
    let screenHeight = document.querySelector('.Screen').scrollHeight-40
    let screenWidth = document.querySelector('.Screen').scrollWidth-120
    let randomX = Math.floor(Math.random()*screenWidth)
    let randomY = Math.floor(Math.random()*screenHeight)
    //the first one is make 0,0 point for the div
    this.setState({ top: randomY, left:randomX})
  };
  congratzClick = () => {
    this.setState({display1:'none', display2:'flex'})
  }


  render() {
    return(
      <div className='Screen' style={{position:'relative',display:'flex',justifyContent:'center', alignItems:'center',width:'100%', height:'100vh'}} >
        <div onMouseOver={this.handleMouseMove} style={{position:'absolute', top:this.state.top, left:this.state.left}}>
          <button onClick={this.congratzClick} style={{display:this.state.display1,color:'white',border:'1px solid black',borderRadius:'10px', padding:'10px',backgroundColor:'grey'}}>
          Click and win 1M $ Dollar
          </button>
        </div>
        <div style={{display:this.state.display2, justifyContent:'center',alignItems:'center'}}>
            Congratz!
          </div>
      </div>
    )
  }
}
export default App
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)