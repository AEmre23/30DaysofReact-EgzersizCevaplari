import React from 'react'
import ReactDOM from 'react-dom'

const value =  prompt('Sayı giriniz!')
const numbers=[];
for (let a=0;a<=value;a++) numbers.push(a)

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}
const isEven = num => {
  if (num % 2 === 0) return true;
  else return false
}
// const isOdd = num => {
//   if (num % 2 != 0) return true;
//   else return false
// }
const evenStyle= {fontWeight:'700',color:'white',padding:'30px 0', width:'calc(98% / 8)',backgroundColor:'#21BF73', fontSize:'30px',marginBottom:'calc(2% / 8)'}
const oddStyle= {fontWeight:'700',color:'white',padding:'30px 0', width:'calc(98% / 8)',backgroundColor:'#FDDB3A', fontSize:'30px',marginBottom:'calc(2% / 8)'}
const primeStyle= {fontWeight:'700',color:'white',padding:'30px 0', width:'calc(98% / 8)',backgroundColor:'#FD5E53', fontSize:'30px',marginBottom:'calc(2% / 8)'}

const Output = numbers.map((nmb) => {
  if (isPrime(nmb)=== true)  return <div key={nmb} style={primeStyle}>{nmb}</div>
  else if (isEven(nmb) === true)  return <div key={nmb} style={evenStyle}>{nmb}</div>
  else return  <div key={nmb} style={oddStyle}>{nmb}</div>
  })  

const Main = () => {

  return (
    <main style={{ width:'80%', padding:'30px 10%', fontFamily:'Courier New'}}>
      <div style={{fontSize:'42px', fontWeight:'900',  marginBottom:'20px'}}>
        30 Days of React
      </div>
      <div style={{fontSize:'23px', fontWeight:'600',  marginBottom:'5px'}}>
        Number Generator
      </div>
      <div style={{fontSize:'13px', fontWeight:'500',  marginBottom:'20px'}}>
        by Emre ALTUNKAYA
      </div>
      <div style={{ position:'relative',display:'flex',flexWrap:'wrap',gap:'calc(2% / 8)', width:'100%', textAlign:'center'}}>
        {Output}
        <div style={{position:'absolute', right:'0', top:'-75px'}}>
          <div style={{textAlign:'right',marginBottom:'8px'}}>Even Numbers => <span style={{margin:'0 3px',width:'20px', height:'20px', borderRadius:'50%',backgroundColor:'#21BF73',padding:'2px 10px'}}></span></div>
          <div style={{textAlign:'right',marginBottom:'8px'}}>Odd Numbers => <span style={{margin:'0 3px',width:'20px', height:'20px', borderRadius:'50%',backgroundColor:'#FDDB3A',padding:'2px 10px'}}></span></div>
          <div style={{textAlign:'right',marginBottom:'8px'}}>Prime Numbers => <span style={{margin:'0 3px',width:'20px', height:'20px', borderRadius:'50%',backgroundColor:'#FD5E53',padding:'2px 10px'}}></span></div>
        </div>
      </div>
    </main>
  )
}
const App = () => (
  <Main />
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)