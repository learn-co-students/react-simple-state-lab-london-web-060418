import React, { Component } from 'react';

export default class Cell extends Component {


  // we use the constructor to set the INITIAL STATE
 constructor(props) {
   super(props)
   this.state = {
     color: this.props.value
   }
 }

 // our increment method makes use of the 'setState' method, which is what we use to alter state
 change = () => {
   const newColor = '#333'
   this.setState({
     color: newColor
   })
 }

  render() {
    return (
      <div onClick={this.change} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}

// Matrix.defaultProps = {
//   values: [ ['#F00'], ['#F00'], ['#F00'], ['#F00'], ['#F00'], ['#F00'], ['#F00'], ['#F00'], ['#F00'], ['#F00']]
// }
