// Level3
// Use the given hexadecimal color generator in the example to create these random colors

import React from 'react'
import ReactDOM from 'react-dom'

let dizi =[]; // an empty array for pushing 5 different hexColor

// This is the given function from repo
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

// pushing 5 different hex
for (let a=0;a<5;a++){
dizi.push(hexaColor())
}

let output = []

dizi.forEach((x) => {
  // for every element of array, we created an JSX element to main element with background color and the id of background color for text
  let stil = {backgroundColor:x ,borderRadius:'5px',marginBottom:'2px',color:'white',fontWeight:'700', display:'flex', width:'100%', justifyContent:'center', padding:'30px 0', textAlign:'center'}
  let ckt = (
  <div style={stil}>
   {x}
  </div>
  )
  output.push(ckt) // we pushing every JSX element to this empyt array that we created above
  // Clearing the variables for every element
  stil={}
  ckt= (
    <div>
    </div>
  )
})

// This is the formatted version to push the main component
const outputLast = output.map((ax)=> <div>{ax}</div>)

const Main = () => (
  <main style={{padding:'10px'}}>
  {outputLast}
  </main>
)
const App = () => (
  <div style={{fontFamily:'Arial'}}>
  <Main />
  </div>
)
const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)