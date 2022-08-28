// Exercise Level 2
// Find the average metric weight and life span of cats in the following API(https://api.thecatapi.com/v1/breeds).
// There are 67 breeds of cats in the API.
// I also use react route in this exercise!
import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'


const CatData = ({allCats}) =>{

  let loop = allCats.map((cat,index) => {

  let tag = 'rd'
  if (index+1 == 1) tag = 'st'
  else if (index+1 == 2) tag= 'nd'
  else tag='rd'
  return <p>{index+1}{tag} cat's name is {cat.name}. Its life span is between {cat.life_span} years and weight is betweeen {cat.weight.metric} kg. </p>
  })

  return (
  <>
  <h2>There are {allCats.length} cat breeds in this data. Here is every one of them:</h2>
  <p> You can go <NavLink to='/'>Home</NavLink> from here.</p>
  {loop}
  </>
)}

const Cats = ({ allCats, catLength }) => {
  let TotalWeigth = 0
  let TotalLifespan = 0
  let metricAverageWeight
  let averageLifespan

  //this is the loop for all cats breed to get each data for question
  let catLoop = allCats.map((cat) => {

  let metricWeigth = cat.weight.metric
  let digits = metricWeigth.replace(/\D/g, "");

  if (digits.length > 2){
    //if its like 4-11 kg ,which make them 3 length,
    // it makes  411 so we have to seperate second number like 4 11 to sum up.
    let number2 = digits[1]+digits[2] 
    let sumOfCat = (parseInt(digits[0]) + parseInt(number2))/2
    TotalWeigth += sumOfCat
  } else {
    //if its like 3-6 kg 
    let sumOfCat = (parseInt(digits[0]) + parseInt(digits[1]))/2
    TotalWeigth += sumOfCat
  }
  metricAverageWeight = (TotalWeigth/catLength).toFixed(2)

    // this part is for lifespan
    let catLifespan = cat.life_span
    let lifespanDigit = catLifespan.replace(/\D/g, "");
    // same "if" logic like above, we have 1 more if because there are also 4 digit number like 11-15 years
    if (lifespanDigit.length == 3){
      let number1 = lifespanDigit[1]+lifespanDigit[2] 
      let sumOfLifespan = (parseInt(lifespanDigit[0]) + parseInt(number1))/2
      TotalLifespan += sumOfLifespan

    } else if (lifespanDigit.length == 4) {
      let number3 = lifespanDigit[0]+lifespanDigit[1] , number4=lifespanDigit[2]+lifespanDigit[3]
      let sumOfLifespan = (parseInt(number4) + parseInt(number3))/2
      TotalLifespan += sumOfLifespan
    } else{
      let sumOfLifespan = (parseInt(lifespanDigit[0]) + parseInt(lifespanDigit[1]))/2
      console.log(sumOfLifespan) // there is none actually
      TotalLifespan += sumOfLifespan
    }
    averageLifespan = (TotalLifespan/catLength).toFixed(2)
})
  return (
    <>
    <h1>React Component Life Cycle</h1>
    <h1>Calling API</h1>
    <p>I use this <a target='_blank' href='https://api.thecatapi.com/v1/breeds'>API link</a> to get data.</p>
    <p>There are {catLength} cat breed in the api</p>
    <div className='cats'>
      <div className='weight' style={{display:'flex', gap:'20px',marginBottom:'20px'}}>
        <p>average metric weight :</p><p style={{color:'red'}}>{metricAverageWeight} kg</p> 
      </div>
      <div className='lifespan' style={{display:'flex', gap:'20px',marginBottom:'20px'}}>
        <p>average cat lifespan :</p><p style={{color:'red'}}>{averageLifespan} year</p> 
      </div>
    </div>
    <p>You can check every cat from <NavLink to='/catdata'>here</NavLink></p>
    </>
  )
}

class App extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    this.fetchCountryData()
  }
  fetchCountryData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
    let catData = this.state.data
    let numberOfCatBreeds = this.state.data.length
    return (
      // <div className='App'>
      //   <h1>React Component Life Cycle</h1>
      //   <h1>Calling API</h1>
      //   <div>
      //     <p>There are {numberOfCatBreeds} cat breed in the api</p>
      //     <div className='countries-wrapper'>
      //         <
      //         
      //     </div>
      //   </div>
      // </div>
      <Router>
      <div className='App'>
        <Switch>
          <Route 
            exact path='/' 
            component={(props) => (
            <Cats
            allCats={catData} 
            catLength={numberOfCatBreeds}
            /> )}
           />
          <Route 
            path='/catdata' 
            component={(props) => (
            <CatData
            allCats={catData} 
            />)} 
          />
        </Switch>
      </div>
    </Router>
    )
  }
}

export default App