import React, { Component } from 'react';

export default class Cell extends Component {
//inital state
constructor(props) {
  super(props)
  this.state = {
    color: this.props.value
  }
}

//change state
colorChange = () => {
   const newColor = '#333'
   this.setState({
     color: newColor
   })
 }

 render() {
   return (
     <div onClick={this.colorChange} className="cell" style={{backgroundColor: this.state.color}}>
     </div>
   )
 }
}
