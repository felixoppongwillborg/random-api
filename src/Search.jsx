import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  state = {
    hello: "",
  }
  randomDog = async () => {
    const response = await axios.get(`https://random.dog/woof.json`)
    this.setState({ hello: response.data.url })
  }
  render() {
    return (
    <>
    <h1>If you're feeling blue, just click the button!</h1>
    <button onClick={this.randomDog}>Hey, click me!</button>
    <div>
    <img id="randomPic" src={this.state.hello} alt="" />
    </div>
    </>
    )
  }
}
export default Search;