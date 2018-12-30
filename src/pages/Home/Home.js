import React, { Component } from 'react';
import Header from './../../Header/Header.js'
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...',
      data2: 'Manisha',
      getMethodData: "yet to fetch",
      postMethodData: "yet to fetch",
    }
    this.updateState = this.updateState.bind(this);
  }
  updateState(e) {
    this.setState({ data: e.target.value });
  }

  handleOnClick = () => {


    //alert("yes"+this.state.data);
    this.props.history.push({
      pathname: '/SearchResultPage',
      state: {
        st: this.state.data,
        ft: this.state.data2,
        gmdata: this.state.getMethodData,
        pmdata: this.state.postMethodData
      }
    });
  }

  componentDidMount() {
    fetch('http://localhost:8080/getMethod/', 
      { mode: 'cors' })
      .then(results => {
        return results.json();
      })
      .then(data => {
        let person = data;
        this.setState({ getMethodData: person });
        console.log("get state: ", this.state.getMethodData);
      });


      fetch('http://localhost:8080/postMethod/', {
        method: 'POST',
        mode: 'cors' ,
        
        body: {
          "email": "yes"
        }
      }).then(res => res.json())
      .then(data => {
        let person = data;
        this.setState({ postMethodData: person });
        console.log("post state: ", this.state.postMethodData);
      })

  }
  render() {
    return (
      <div>
        {/* <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        <Header />
        <div class="homepage>">
          <div class="nw_pg hme_pg">
            <div class="hero" id="hero" >
              <div class="contwrap">
                <section>
                  <div class="hme_srch">
                    <div class="hme_srchdiv">
                      <h1>Start your postgraduate journey </h1>
                      <p>Discover the courses, funding and advice to get you there</p>
                      <div class="subql_srch clr">
                        <form class="nwhme_sr" id="homesearchform" method="post" action="/pgs/pgs_browse.pg_design">
                          <input type="text" placeholder={this.state.data} onChange={this.updateState} />
                          <button aria-label="Home page submit button" class="nworg_btn nwbtn" type="button" onClick={this.handleOnClick} >
                            <i class="fa fa-search"></i>
                          </button>
                          <div class="qualtxt" id="qualtxt">Masters </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;