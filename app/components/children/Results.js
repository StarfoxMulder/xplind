var React = require("react"),
    Header = require("./children/Header.js"),
    Destination = require("./children/Destination.js");

var Results = React.createClass({

  getInitialState: function() {
    return {
      users: {},
      destinations: {}
    };
  },

  render: function() {
    return (
      <section className="row center">
        <section className="col s10 ">
          <section className="panel panelDefault textCenter" id="resultsPanel">
            <section className="panelHeading">
              <h3>Destinations Near You</h3>
            </ section>
            <Destination destinations={this.state.destinations}>
            </ Destination>
          </ section>
        </ section>
      </ section>
    );
  }

});

module.exports = Results;
