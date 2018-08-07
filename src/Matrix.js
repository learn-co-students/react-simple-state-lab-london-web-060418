import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (colVals) => (
    colVals.map(colVal =>
      <Cell value={colVal} />)
  )

  genMatrix = () => (
    this.props.values.map(rowColVals =>
      <div className="row">{this.genRow(rowColVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
Matrix.defaultProps = {
  values: (() => {
    const row = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (Array(10).fill(row))
  })()
}
//console.log(Matrix.defaultProps.values)
