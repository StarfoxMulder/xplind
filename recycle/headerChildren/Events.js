var React = require('react');
var ReactDOM = require('react-dom');

var Events = React.createClass({
  getInitialState: function() {
    return {
      "events": {},
      "notes": {},
      "assocaitedUsers": []
    };
  },
  loadSampleData: function(location){
    this.runSearch(location).setState(res);
    //if the distance, location, and endDate fields are blank => 50km; getCurrentPosition(); Date.getTime()+70000000000 {that should be 0000msec 00 sec 00min 00hr 7days}
    // Obviously, more to dive into here but the original loadSampleData() was :
    //    this.setState(samples);
    //    this.setState({selectedConversation: samples.humans["Rami Sayar"].conversations});
  },
  setSelectedConversation: function(human_index){
    this.setState({
      selectedConversation: this.state.humans[human_index].conversations
    })
    // At what point should I start concerning parents about their chilren?  When they're great-great-grandchildren or when they're children?
    // seems like it'll be the earlier - all that info is being passed down the line as a breakdown of a larger JS object
  },
  render: function() {
    return (
      <div>
        <div id="header"></div>
        <button onClick={this.loadSampleData}>Load Sample Data</button>
        <div className="container">
          <div className="column">
            <InboxPane humans={this.state.humans} setSelectedConversation={this.setSelectedConversation} />
          </div>
          <div className="column">
            <ConversationPane conversation={this.state.selectedConversation} />
          </div>
          <div className="column">
            <StorePane stores={this.state.stores} />
          </div>
        </div>
      </div>
    )
  }
});
