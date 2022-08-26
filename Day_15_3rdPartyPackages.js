// I use axios, moment and react-icons here.

import React, { Component } from 'react'
// axios is a package which
// send requests to a server to fetch data
import axios from 'axios'
import ReactDOM from 'react-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import moment from 'moment';
import { FaRegCaretSquareRight } from "react-icons/fa";

class App extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
    axios
      .get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderComments = () => {
    return this.state.data.map((user) => {
      return (
        <div>
          <div style={{border:'1px solid black', padding:'10px',margin:'10px'}}>
            <h1>{user.id}</h1>
            <h4>Title:</h4><p>{user.title}</p>
           <h4>Comment:</h4><p>{user.body}</p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <>
      <div className='App'>
      <p>My military service ended {moment('2022-3-19').fromNow()}</p>
      <p>The challenge will be over in {moment('2020-10-30').fromNow()}</p>
        <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
        <h1>Fetching Data Using Axios</h1>
        <div>
          <FaRegCaretSquareRight />
          <p>There are {this.state.data.length} comments in the api</p>
          <div className='countries-wrapper'>{this.renderComments()}</div>
        </div>
      </div>
      </>
    )
  }
}
export default App
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)