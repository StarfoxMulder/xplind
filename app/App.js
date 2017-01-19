var React = require("react");
var ReactDOM = require("react-dom");
var MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");
var Main = require("./components/Main.js");

var App = React.createClass({
  render: function() {
    return(
      <MuiThemeProvider>
        <Main />
      </ MuiThemeProvider>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));
