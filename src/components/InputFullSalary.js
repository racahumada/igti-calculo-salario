import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  calculationSalary = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="number"
          name="fullSalary"
          id="fullSalary"
          onChange={this.calculationSalary}
        />
      </div>
    );
  }
}
