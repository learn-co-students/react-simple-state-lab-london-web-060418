import React, { Component } from 'react'

class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: props.value ? props.value : "#F00"
    }
  }

  changeColor = () => {
    this.setState({
      color:"#333"
    })
  }


  render() {
    return (
      <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}></div>
    ) //end of return
  } // end of render

} //end of cell clas

export default Cell
