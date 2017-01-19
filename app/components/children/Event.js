var React = require("react"),
    Header = require("./children/Header"),
    // Results = require("./children/Results"),
    // Saved = require("./children.Saved"),
    isEqual = require("lodash.isequal"),
    helper = require("./utils/helper.js");

var Event = React.createClass({

  getInitialState: function() {
    return {
      topic: "",
      beginYear: "",
      endYear: "",
    };
  },

  render: function() {
    return (
      <section className="panel-body eventCard">
        {this.props.results.map(function(result, i) {
          return (
            <section id={result.id} key={i} className="text-left well">
              <h3>{result.title}</h3>
              <h5>{result.description}</h5>
            </section>
          );
        }, this)}

      </section>
    )
  }

});

module.exports = Event;
