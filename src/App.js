import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      result: 0
    }
  }
  calculator = () => {
    var x = this.fnumbox.value * 1
    var y = this.snumbox.value * 1
    var op = this.opnumbox.value * 1
    var z = 0
    switch (op) {
      case 1: z = x + y; break;
      case 2: z = x - y; break;
      case 3: z = x * y; break;
      case 4: z = x / y; break;
      default:


    }
    this.setState({ result: z })


  }
  render() {
    const mystyle={
      color:"black",
      background :"red",
      padding:"10px"

    }
    return (
      <div>
        <input style={mystyle} ref={c => { this.fnumbox = c }} placeholder="enter the first number"></input> &nbsp;&nbsp;
        <input ref={c => { this.snumbox = c }} placeholder="enter the second number"></input> &nbsp;&nbsp;
        <br></br>
        <hr></hr>
        <select ref={c => { this.opnumbox = c }} onChange={this.calculator}>
          <option value="1">Addition</option>
          <option value="2">Substraction</option>
          <option value="3">Multiplication</option>
          <option value="4">Division</option>
        </select>
        <hr></hr>
        <button onClick={this.calculator}>calculate</button>
        <h1>result{this.state.result}</h1>
      </div>
    )
  }
}
