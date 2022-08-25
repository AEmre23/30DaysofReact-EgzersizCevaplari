// Exercises Level 2
// Validate the form given above (a gif image or a video will be provided later).
// First try to validate without using any library then try it with validator.js.
// I didnt use validator.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option key={value} value={value}> {label}</option>
))

class App extends Component {
  // declaring state
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },
    display:'none',
  }
  handleChange = (e) => {
    /*
     we can get the name and value like: e.target.name, e.target.value
    Wwe can also destructure name and value from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target
    /*
    [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
    */

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleBlur = (e) => {
    const { name, value } = e.target
    this.setState({ touched: { ...this.state.touched, [name]: true } })
  }
  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
      lastName: '',
    }

    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 3 and 12'
    }

    if (
      (this.state.touched.lastName && this.state.lastName.length < 2) ||
      (this.state.touched.lastName && this.state.lastName.length > 18)
    ) {
      errors.lastName = 'Last name must be between 2 and 18'
    }

    return errors
  }
  handleSubmit = (e) => {
    /*
      e.preventDefault()
      stops the default behavior of form element 
      specifically refreshing of page
      */
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
      display,
    } = this.state
    
    if (firstName == '' || lastName == '' || email == '' ) {
      console.log('xd')
      this.setState({display: 'block'})
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else { 
      this.setState({display: 'none'})
      
        const formattedSkills = []
        for (const key in skills) {
          if (skills[key]) {
            formattedSkills.push(key.toUpperCase())
          }
        }
        const data = {
          firstName,
          lastName,
          email,
          country,
          gender,
          tel,
          dateOfBirth,
          favoriteColor,
          weight,
          bio,
          file,
          skills: formattedSkills,
        }
        /*
        the is the place where we connect backend api
          to send the data to the database
          */
        console.log(data)
    }
  }

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation

    const { firstName, lastName } = this.validate()
    return (
      <div className='App'>
      <h2 style={{display:this.state.display,color:'red'}}>Please Fill the required areas!</h2>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div style={{display:'flex', gap:'2px'}} className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <label htmlFor='firstName'style={{display:this.state.display,color:'red'}}>*</label>
              <input
                type='text'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              /> <br />
              <small>{firstName}</small>
            </div>
            <div style={{display:'flex', gap:'2px'}}  className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <label htmlFor='lastName'style={{display:this.state.display,color:'red'}}>*</label>
              <input
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Last Name'
              /><br />
              <small>{lastName}</small>
            </div>
            <div style={{display:'flex', gap:'2px'}}  className='form-group'>
              <label htmlFor='email'>Email </label>
              <label htmlFor='email'style={{display:this.state.display,color:'red'}}>*</label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='Email'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <input
              type='tel'
              name='tel'
              value={this.state.tel}
              onChange={this.handleChange}
              placeholder='Tel'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
              placeholder='Date of Birth'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='favoriteColor'
              name='favoriteColor'
              value={this.state.favoriteColor}
              onChange={this.handleChange}
              placeholder='Favorite Color'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={this.state.weight}
              onChange={this.handleChange}
              placeholder='Weight in Kg'
            />
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
export default App
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)