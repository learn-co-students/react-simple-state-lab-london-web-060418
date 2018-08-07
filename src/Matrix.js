import React, { Component } from 'react';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
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
    values: (function() {
      let matrix = [];
      let H = 10;
      let W = 10;
      for ( var y = 0; y < H; y++ ) {
      matrix[ y ] = [];
        for ( var x = 0; x < W; x++ ) {
            matrix[ y ][ x ] = "#F00";
        }
      }
      return matrix
    })()
}
