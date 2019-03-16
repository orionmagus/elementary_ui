import React from "react";
import Datepicker from "./Datepicker";
class Single extends React.Component {
  state = { selectedDate: null };

  _handleOnDateSelected = ({ selected, selectable, date }) => {
    this.setState(state => ({ selectedDate: date }));
  };

  render() {
    let { selectedDate } = this.state;
    return (
      <div>
        <Datepicker
          selected={this.state.selectedDate}
          onDateSelected={this._handleOnDateSelected}
        />
        {this.state.selectedDate && (
          <div style={{ paddingTop: 20, textAlign: "center" }}>
            <p>Selected:</p>
            <p>{`${selectedDate.toLocaleDateString()}`}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Single;
