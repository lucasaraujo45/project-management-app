import React from "react";

const GiveDate = React.createClass({
  getInitialState: function() {
    return {
      commits: ['One', 'Two']
    };
  },

  dateTwoWeeksAgo: function() {
    return new Date().toDateString();
  },

  render: function() {
    return (
      <div>
        <h2 className="headings" id="commitTotal"> Commits since {this.dateTwoWeeksAgo()} : {this.state.commits.length} </h2>
      </div>
    );
  }
})
