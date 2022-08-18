// Exercises Level 2-1
// In the following design, evens are green, odds are yellow and prime numbers are red. Build the following colors using React component

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

// Exercises Level 2-2
// Create the following hexadecimal colors using React component

import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => (
    <header style={{marginTop:'20px', fontFamily:'Courier New'}}>
      <div style={{fontSize:'42px', fontWeight:'900',  marginBottom:'20px', textAlign:'center'}}>
        30 Days of React
      </div>
      <div style={{fontSize:'23px', fontWeight:'600',  marginBottom:'5px', textAlign:'center'}}>
        Hexadecimal Color Generator
      </div>
      <div style={{fontSize:'13px', fontWeight:'500',  marginBottom:'20px', textAlign:'center'}}>
        by Emre ALTUNKAYA
      </div>
      </header>
  )

const Main = () => {
  let dizi =[];
  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color }

    let inputValue=prompt('Sayı giriniz')
    for (let a=0;a<inputValue;a++) dizi.push(hexaColor())
    
  const Output = dizi.map((nmb) => {
    return <div key={nmb} style={{ fontWeight:'600',color:'white',padding:'calc(98% / 17) 0', width:'calc(98% / 8)',backgroundColor:nmb, fontSize:'16px',marginBottom:'calc(2% / 8)', borderRadius:'5px' }}>{nmb}</div>
  })

  return(
    <>
    <main style={{ width:'80%', padding:'30px 10%'}}>
      <div style={{fontSize:'13px', fontWeight:'500',  marginBottom:'10px'}}>{inputValue} adet HEX color</div>
      <div style={{ display:'flex',flexWrap:'wrap',gap:'calc(2% / 8)', width:'100%', textAlign:'center'}}>
        {Output}
      </div>
    </main>
    </>
    )
}

const App = () => (
  <>
  <Header />
  <Main />
  </>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// Exercises Level 3
// Make the following bar group using the given data

import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => (
    <header style={{marginTop:'20px', fontFamily:'Arial'}}>
      <div style={{fontSize:'42px', fontWeight:'800',  marginBottom:'20px', textAlign:'center'}}>
        30 Days of React
      </div>
      <div style={{fontSize:'33px', fontWeight:'600',  marginBottom:'10px', textAlign:'center'}}>
        World Population
      </div>
      <div style={{fontSize:'13px', fontWeight:'500',  marginBottom:'10px', textAlign:'center'}}>
        Ten most populated countries
      </div>
      <div style={{fontSize:'11px', fontWeight:'500',  marginBottom:'20px', textAlign:'center'}}>
        by Emre ALTUNKAYAa
      </div>
      </header>
  )

  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'USA', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]

  const biggestWidth = Number(String(tenHighestPopulation[0].population).slice(0, 3))

  const rowStyle={display:'flex', alignItems:'center',textAlign:'left', fontFamily:'Arial', padding:'5px 0',fontSize:'20px',fontWeight:'500'}
  
  function commify(n) {
    var parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
    } 
  let first2Str, first2Num
  const Populations = ({ population: { country,population } }) => {
      let slicedPop = population
      if (population > 1000000000) {
        first2Str = String(slicedPop).slice(0, 3)
        first2Num = Number(first2Str)
      }else {
        first2Str = String(slicedPop).slice(0, 2)
        first2Num = Number(first2Str)
      }
    return (
      <div style={rowStyle}>
        <div style={{textAlign:'left',minWidth:'225px',marginRight:'5px'}}>
          {country.toUpperCase()}
        </div>
        <div style={{minWidth:biggestWidth, marginRight:'10px'}}>
            <div style={{padding:'15px 0', width:first2Num, backgroundColor:'orange', borderRadius:'2px'}}>
            </div>
        </div>
        <div>
          {commify(population)}
        </div>
      </div>
    )
  }

  const TenHighest = ({ulke}) => {
    const countryList = ulke.map((ulkeler)=> <Populations population={ulkeler} />)
    return <div>{countryList}</div>
    }

const Main = () => (
  <main style={{width:'100%', display:'flex', justifyContent:'center'}}>
  <TenHighest ulke={tenHighestPopulation} /> 
  </main>
)

const App = () => (
  <>
  <Header />
  <Main />
  </>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)