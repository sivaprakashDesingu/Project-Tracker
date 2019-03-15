import React, { Component } from 'react';
// import Header from './../Header/Header.js'
import { withRouter } from 'react-router-dom'

class SearchResultPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchValue :this.props.SearchText,
        paramValue: this.props.location.state      
      };
    }

    render() {
      return (
        <div>
          {/* <Header />  */}
          <p>{this.state.paramValue.st }</p>
          <p>{this.state.paramValue.ft }</p>
          <p>{this.state.paramValue.gmdata}</p>
          <p>{this.state.paramValue.pmdata}</p>
          
        </div>
          
      );
    }
}

export default withRouter(SearchResultPage);