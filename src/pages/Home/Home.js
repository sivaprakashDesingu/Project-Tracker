import React, { Component } from 'react';
import Header from './../../Header/Header.js'
import LeftSection from './../../global/LeftSection/LeftSection';
import './Home.css';
import Tile from './../common/Tile/Tile.js';
import {Chart} from 'react-google-charts';

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
        <div class="clear">
          <div class="floatLeft leftSection">
            <LeftSection />
          </div>
          <div class="floatLeft rightSection">
            <div class="grid col-4">
            <Tile count="30" tileName="Total project" />
            <Tile count="9" tileName="Pending project" />
            <Tile count="1" tileName="Progress project" />
            <Tile count="20" tileName="Completed project" />
            
          
            </div>

            <div class="statsInfro clear">
              <div class="floatLeft overall">
                <h2>Task Overview</h2>
                <div class="chatwrp">
                <Chart
                    width={'100%'}
                    height={'467px'}
                    chartType="Line"
                    loader={<div>Loading Chart</div>}
                    data={[
                      [
                        'Week',
                        'Completed',
                        'Pending',
                        'In Progress',
                      ],
                      ['week1', 11.9, 17.6, 10.4],
                      ['Week2', 37.8, 80.8, 41.8],
                      ['Week3', 30.9, 69.5, 32.4],
                      ['Week4', 25.4, 57, 25.7],
                    ]}
                    options={{

                      chart: {
                        title: 'Overall performace month wise',
                        subtitle: 'Jan 2019',
                        hAxis: {
                          title: 'Total Tasks',
                          minValue: 0,
                        },
                      },
                    }}
                    rootProps={{ 'data-testid': '3' }}
                  />
                </div>
                </div>
               
              <div class="floatLeft currentWork">
                      <div class="prgressTask">
                          <h3>Task in progress</h3>
                          <h4>A/B testing</h4>
                          <span class="per">
                           <span class="prgstat" style={{background: '#5fa2dd',width:'50%'}}></span>
                          </span>
                          <span class="stausHed">Status
                          
                          </span>
                          <span class="status">On Hold</span>

                          <div class="btnwrp">
                            <a href="#">Pause</a>
                            <a href="#">Completed</a>
                          </div>
                      </div>
                      <div class="prgressTask">
                          <h3>Task in progress</h3>
                          <h4>A/B testing</h4>
                          <span class="per" >
                          <span class="prgstat" style={{background: '#f4b400',width:'25%'}}></span>
                          </span>
                          <span class="stausHed">Status</span>
                          <span class="status">On Hold</span>

                          <div class="btnwrp">
                            <a href="#">Pause</a>
                            <a href="#">Completed</a>
                          </div>
                      </div>
                      <div class="prgressTask">
                          <h3>Task in progress</h3>
                          <h4>A/B testing</h4>
                          <span class="per" >
                          <span class="prgstat" style={{background: '#0ca033',width:'75%'}}></span>
                          </span>
                          <span class="stausHed">Status</span>
                          <span class="status">On Hold</span>

                          <div class="btnwrp">
                            <a href="#">Pause</a>
                            <a href="#">Completed</a>
                          </div>
                      </div>
              </div>
            </div>
            
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default Home;