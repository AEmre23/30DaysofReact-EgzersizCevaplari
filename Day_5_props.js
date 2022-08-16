// Exercise Level 3 - 2
// Use functional component to design the following user card.

import React from 'react'
import ReactDOM from 'react-dom'
import emreRes from './images/emre.jpg'

const skillsDivStyle= {
  display:'flex',
  flexWrap:'wrap',
  gap:'15px',
  marginBottom:'30px',
  maxHeight:'0',
  overflow:'hidden',
  transition:'max-height .2s ease-in-out'
}
const skillsStyle={
  backgroundColor:'aqua',
  color:'white',
  padding:'8px 18px',
  borderRadius:'5px',
  fontWeight:'600'
}
const showDate = (zaman) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const month = months[zaman.getMonth()].slice(0,3)
  const year = zaman.getFullYear()
  const day = zaman.getDate()
  return `Joined on ${day} ${month}, ${year}`
}

const Main = (props) => {
  const data = props.data
  const {
    fullName,
    title,
    country,
    skills,
    date,
  } = data

  const skillFormatted = skills.map((x)=> <div key={x} style={skillsStyle}>{x}</div>)

  const handleClick = (e) => {
    e.preventDefault()
    const acil = document.querySelector('.degisen')
    const dondur = document.querySelector('span')
    dondur.classList.toggle('dondurStyle')

    if (acil.style.maxHeight == '0px'){
      acil.style.maxHeight = acil.scrollHeight + "px";
    } else {
      acil.style.maxHeight = '0'
    }
  }

  return (
    <main style={{width:'60%', padding:'20px 20px', fontFamily:'Arial', border:'2px solid lightblue', borderRadius:'25px'}}>
      <div className='resim'>
        <img src={emreRes} alt='emreninresimi' />
      </div>
      <h1 style={{marginBottom:'15px'}}>{fullName}</h1>
      <h4 style={{fontWeight:'400', marginBottom:'20px'}}>{title}, {country}</h4>
      <h3 onMouseOver={handleClick} onMouseOut={handleClick} style={{marginBottom:'20px', cursor:'pointer'}}>SKILLS <span>^</span> </h3>
      <div className='degisen' style={skillsDivStyle}>
        {skillFormatted}
      </div>
      <div style={{fontWeight:'400', fontSize:'14px', marginBottom:'10px'}}>
      {showDate(date)}
      </div>
    </main>
  )
}

const App = () => {
  const data = {
    fullName: 'Emre ALTUNKAYA',
    title: 'Frontend Developer',
    country: 'Turkey',
    skills: [
      'HTML','CSS','JavaScript','GIT','JIRA','MatLAB','React','Redux','NodeJS','SCSS','SASS','Python','AdobeXD'
    ],
    date: new Date(),
  }

  return (
    <div className='app'>
      <Main data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
