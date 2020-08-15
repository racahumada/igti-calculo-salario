import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  returnSalary = (event) => {
    const { valueChange } = this.props;
    valueChange(event.target.value);
  };
  render() {
    const { fullSalary } = this.props;
    return (
      <div>
        <input
          type="number"
          name="fullSalary"
          id="fullSalary"
          value={fullSalary}
          onChange={this.returnSalary}
        />
      </div>
    );
  }
}
