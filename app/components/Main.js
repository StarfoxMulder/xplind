var React = require("react"),
    Header = require("./children/Header.js"),
    Results = require("./children/Results.js"),
    Destination = require("./children/Destination.js"),
    samples = require ("./sampleData.js"),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    helper = require("./utils/helpers.js");

var Main = React.createClass({

  getInitialState: function() {
    return {
      users: {},
      destinations: {},
      results: {},
      notes: {}
    }
  },

  loadSampleData: function(term, location) {
    this.setState(samples);
  },


  render: function() {
    return (
      <div className="container">
        <div className="section">
          <div className="row">
            <Header user={this.state.users.mainUser} />
          </div>
        </div>

        <div className="section noPadBot">
          <br/><br/>
          <div className="row center">
            <Results destinations = {this.state.destinations} />
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Main;

