import React, { Component } from 'react';
import Header from './../../Header/Header.js'
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
          <Header /> 
          {this.state.paramValue.st }
          {this.state.paramValue.ft }
        </div>
          
      );
    }
}

export default withRouter(SearchResultPage);