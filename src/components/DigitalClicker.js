// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
  constructor(){
    super()
    //initial state
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    //update state
    this.setState({
      timesClicked: this.state.timesClicked + 1
    }, () => console.log(this.state.timesClicked))
  }

  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }

}

export default DigitalClicker
