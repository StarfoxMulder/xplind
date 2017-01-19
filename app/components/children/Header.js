var React = require("react");
var helper = require("./utils/helpers.js");

var Header = React.createClass({

  getInitialState: function() {
    return {
      user: {}
    };
  },

  render: function() {
    return (
      <nav className="lightBlue lighten1" role="navigation">
        <div className="navWrapper container">
          <a id="logoContainer" href="#" className="brandLogo">XPLiND
          </a>

          <ul className="right">
            <li>
              <div className="chip">
                <a className="dropdownButton" href="/profile">
                  <img src={this.state.userImage} alt="User Control" />
                  {this.state.userName}
                </a>
              </div>
            </li>
          </ul>

        </div>
      </nav>

    );
  }
});

module.exports = Header;

