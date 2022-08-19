// Exercise Level 2 - 1
// Use React state to change the background of the page. You can use this technique to apply a dark mode for your portfolio.

import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/emre.jpg'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}
const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}
class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: 'white',
      color: 'black',
    },
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }
  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {
    let darkMode = {backgroundColor: 'black', color: 'white'}
    let lightMode = {backgroundColor: 'white', color: 'black'}

    let modeSelector = this.state.styles.backgroundColor == 'white' ? darkMode : lightMode
    this.setState({ styles: modeSelector })
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }

    return (
      <div style={ this.state.styles } className='app'>
        
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// Exercise Level 2-2
// After long time of lock down, you may think of travelling and you do not know where to go. You may be interested to develop a random country selector that selects your holiday destination.

import React from 'react'
import ReactDOM from 'react-dom'
const countries = [
  {
      "name": "Afghanistan",
      "capital": "Kabul",
      "languages": [
          "Pashto",
          "Uzbek",
          "Turkmen"
      ],
      "population": 27657145,
      "flag": "https://placeimg.com/220/180/any/grayscale",
      "currency": "Afghan afghani"
  },
  {
      "name": "Åland Islands",
      "capital": "Mariehamn",
      "languages": [
          "Swedish"
      ],
      "population": 28875,
      "flag": "https://placeimg.com/220/180/animals",
      "currency": "Euro"
  },
  {
      "name": "Albania",
      "capital": "Tirana",
      "languages": [
          "Albanian"
      ],
      "population": 2886026,
      "flag": "https://placeimg.com/220/180/any",
      "currency": "Albanian lek"
  },
  {
      "name": "Algeria",
      "capital": "Algiers",
      "languages": [
          "Arabic"
      ],
      "population": 40400000,
      "flag": "https://placeimg.com/220/180/nature",
      "currency": "Algerian dinar"
  },
  {
      "name": "American Samoa",
      "capital": "Pago Pago",
      "languages": [
          "English",
          "Samoan"
      ],
      "population": 57100,
      "flag": "https://placeimg.com/220/180/people",
      "currency": "United State Dollar"
  },
  {
      "name": "Andorra",
      "capital": "Andorra la Vella",
      "languages": [
          "Catalan"
      ],
      "population": 78014,
      "flag": "https://placeimg.com/220/180/tech",
      "currency": "Euro"
  },
  {
      "name": "Angola",
      "capital": "Luanda",
      "languages": [
          "Portuguese"
      ],
      "population": 25868000,
      "flag": "https://placeimg.com/220/180/arch/grayscale",
      "currency": "Angolan kwanza"
  },
  {
      "name": "Anguilla",
      "capital": "The Valley",
      "languages": [
          "English"
      ],
      "population": 13452,
      "flag": "https://placeimg.com/220/180/arch",
      "currency": "East Caribbean dollar"
  },
  {
      "name": "Antarctica",
      "capital": "",
      "languages": [
          "English",
          "Russian"
      ],
      "population": 1000,
      "flag": "https://placeimg.com/220/180/any/sepia",
      "currency": "Australian dollar"
  },
  {
      "name": "Antigua and Barbuda",
      "capital": "Saint John's",
      "languages": [
          "English"
      ],
      "population": 86295,
      "flag": "https://placeimg.com/220/180/nature/grayscale",
      "currency": "East Caribbean dollar"
  },
  {
    "name": "Argentina",
    "capital": "Buenos Aires",
    "languages": [
        "Spanish",
        "Guaraní"
    ],
    "population": 43590400,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Argentine peso"
},
{
    "name": "Armenia",
    "capital": "Yerevan",
    "languages": [
        "Armenian",
        "Russian"
    ],
    "population": 2994400,
    "flag": "https://placeimg.com/220/180/nature/sepia",
    "currency": "Armenian dram"
},
{
    "name": "Aruba",
    "capital": "Oranjestad",
    "languages": [
        "Dutch",
        "(Eastern) Punjabi"
    ],
    "population": 107394,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Aruban florin"
},
{
    "name": "Australia",
    "capital": "Canberra",
    "languages": [
        "English"
    ],
    "population": 24117360,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Australian dollar"
},
{
    "name": "Austria",
    "capital": "Vienna",
    "languages": [
        "German"
    ],
    "population": 8725931,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Euro"
},
{
    "name": "Azerbaijan",
    "capital": "Baku",
    "languages": [
        "Azerbaijani"
    ],
    "population": 9730500,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Azerbaijani manat"
},
{
    "name": "Bahamas",
    "capital": "Nassau",
    "languages": [
        "English"
    ],
    "population": 378040,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Bahamian dollar"
},
{
    "name": "Bahrain",
    "capital": "Manama",
    "languages": [
        "Arabic"
    ],
    "population": 1404900,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Bahraini dinar"
},
{
    "name": "Bangladesh",
    "capital": "Dhaka",
    "languages": [
        "Bengali"
    ],
    "population": 161006790,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Bangladeshi taka"
},
{
    "name": "Barbados",
    "capital": "Bridgetown",
    "languages": [
        "English"
    ],
    "population": 285000,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Barbadian dollar"
},
{
    "name": "Belarus",
    "capital": "Minsk",
    "languages": [
        "Belarusian",
        "Russian"
    ],
    "population": 9498700,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "New Belarusian ruble"
},
{
    "name": "Belgium",
    "capital": "Brussels",
    "languages": [
        "Dutch",
        "French",
        "German"
    ],
    "population": 11319511,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Euro"
},
{
    "name": "Belize",
    "capital": "Belmopan",
    "languages": [
        "English",
        "Spanish"
    ],
    "population": 370300,
    "flag": "https://placeimg.com/220/180/nature/grayscale",
    "currency": "Belize dollar"
}
]
const Header = () => (
  <header style={{  backgroundColor:'aqua', padding:'10px 0'}}>
    <div style={{fontSize:'42px', fontWeight:'800',  marginBottom:'20px', textAlign:'center'}}>
      30 Days of React
    </div>
    <div style={{fontSize:'33px', fontWeight:'600',  marginBottom:'10px', textAlign:'center'}}>
      Country Selector
    </div>
    <div style={{fontSize:'13px', fontWeight:'500',  marginBottom:'10px', textAlign:'center'}}>
    Holiday Destination 
    </div>
  </header>
)
const Footer = () => (
  <footer style={{position:'absolute', bottom:'0', width:'100%', textAlign:'center', backgroundColor:'aqua',padding:'10px 0', fontWeight:'600' }}>
    by Emre ALTUNKAYA
  </footer>
)

function commify(n) {
  var parts = n.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
  } 
const rowStyle= {marginBottom:'10px'}
class Country extends React.Component {
  state ={
    flag: 'https://placeimg.com/220/180/any',
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: 'Pashto,Uzbek,Turkmen',
    population: commify(27657145),
    currency: "Afghan afghani"
  } 
  changeCountry = () => {
    let deger = this.props.ulkeler
    let index = Math.floor(Math.random()* deger.length)
    let langs = deger[index].languages
    this.setState({
      flag: deger[index].flag,
      name: deger[index].name,
      capital: deger[index].capital,
      population: commify(deger[index].population),
      languages: langs.join(', '),
      currency: deger[index].currency
    })
  }
  render(){
    const {ulkeler} = this.props.ulkeler
    return (
      <>
        <div style={{padding:'30px 60px', border:'1px solid whitesmoke', boxShadow:'rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px'}}>
          <div style={{minWidth:'350px', marginBottom:'20px', display:'flex',flexDirection:'column',justifyContent:'Center', alignItems:'center'}}>
          <img src={this.state.flag} alt={this.state.name} />
          <div style={{fontWeight:'600',marginTop:'10px', fontSize:'22px'}}>{this.state.name}</div>
          </div>

          <div style={rowStyle}><span style={{fontWeight:'600'}}>Capital:</span> {this.state.capital}</div>
          <div style={rowStyle}><span style={{fontWeight:'600'}}>Languages:</span> {this.state.languages}</div>
          <div style={rowStyle}><span style={{fontWeight:'600'}}>Population:</span> {this.state.population}</div>
          <div style={rowStyle}><span style={{fontWeight:'600'}}>Currency:</span> {this.state.currency}</div>
        </div>
        <button onClick={this.changeCountry} style={{cursor:'pointer',padding:'10px 30px', backgroundColor:'aqua', marginTop:'25px', border:'none', borderRadius:'5px', color:'white', fontWeight:'600'}} >
            Select Country
        </button>
      </>
    )
  }
}
class Main extends React.Component {
  render() {
    return (
      <main style= {{margin:'30px 0',width:'100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Country ulkeler={countries} />

      </main>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div style={{fontFamily:'Arial', position:'relative', minHeight:'100vh'}}>
      <Header />
      <Main />
      <Footer />
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)