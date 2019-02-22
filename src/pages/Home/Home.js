import React, { Component } from 'react';
import Header from './../../Header/Header.js'
import LeftSection from './../../global/LeftSection/LeftSection';
import './Home.css';
import Server from '../server/server';
import Tile from './../common/Tile/Tile.js';
import {Chart} from 'react-google-charts';
import Calendar from 'react-calendar';
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();




class Home extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      date: new Date(),
      items : [
        { id: 'PM-00001', task: 'Drag and Dro', startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done'},
        { id: 'PM-00002', task: 'Voice API', startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done'},
        { id: 'PM-00002', task: 'Network API', startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done' },
        { id: 'PM-00003', task: 'PGS Fundig page', startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done'},
        { id: 'PM-00004', task: 'PGS Newsletter', startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done' }
      ],
      paramValue: this.props.location.state,
      LoggedinEmpDet:[],
      isDirectReportingPerson:false,
      projectStatusList:[]

      
    }
    


    //this.updateState = this.updateState.bind(this);
  }
  // updateState(e) {
  //   this.setState({ data: e.target.value });
  // }


  onChange = date => this.setState({ date })

  componentDidMount() {
    /* Get loggin E mployee Date*/
    var data = {
      id: cookies.get('loggeinEmpId')
    }
    fetch(Server.backendServer+"getLggedinEmployeeData", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(res) {
            this.setState({LoggedinEmpDet:res});  
            this.setState({isDirectReportingPerson:this.state.LoggedinEmpDet[0].Designation});     
        }.bind(this)).catch(function(err) {
            console.log(err)
        });
        
     /* Get loggin E mployee Date*/
      /* GET NO OF PROJECT aSSIGNED BY LEAD */

    fetch(Server.backendServer+"noOfProjectsByLead",{
          method:"POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      }).then(function(response){
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(res){
          console.log(res);
          this.setState({projectStatusList:res});    
      }.bind(this)).catch(function(err){
          console.log(err)
      });
      /* GET NO OF PROJECT aSSIGNED BY LEAD */

  }
  render() {
    // var leftSection = this.state.LoggedinEmpDet.map(function(emp){
    //   return (
    //   <LeftSection Name={emp.EmpName} Designation={emp.Designation} />
    //   )
    // });

    var listItems = this.state.items.map(function(item) {
			return (
        <div className="grid col-6">
          <div className="gridBody">{item.id}</div>
          <div className="gridBody">{item.task}</div>
          <div className="gridBody">{item.startDate}</div>
          <div className="gridBody">{item.endDate}</div>
          <div className="gridBody">{item.estDate}</div>
          <div className="gridBody">{item.Status}</div>
        </div>
			);
		});
    return (
      <div>
        {/* <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
       
        <Header Role={this.state.isDirectReportingPerson}/>
        <div className="clear">
          <div className="floatLeft leftSection">
            {/* {leftSection} */}

            {
                this.state.LoggedinEmpDet.map(function(emp){
                  return (

                  <LeftSection Name={emp.EmpName} Designation={emp.Designation} />
                  )
                })

            }
          </div>
          <div className="floatLeft rightSection" >
            
            <div className="grid col-3">
            {
              this.state.projectStatusList.map(function(res){
                  return(
                    <div>
                      {(() => {
                                if (res.ProjectStatus=="Total") {
                                    return (
                                        <Tile count={res.counts} tileName={res.ProjectStatus} />
                                    )
                                }else{
                                  
                                }
                            })()}
                    </div>
                    
                  )
              })
              }
            {/* <Tile count="30" tileName="Total project" />
            <Tile count="9" tileName="Pending project" />
            <Tile count="20" tileName="Completed project" /> */}
            </div>

            <div className="statsInfro clear">
              <div className="floatLeft overall">
                <h2>Task Sheet</h2>
                <div className="chatwrp timst">
                  <div className="grid col-6">
                      <div className="Head">Task id </div>
                      <div className="Head">Task Name</div>
                      <div className="Head">Start Date</div>
                      <div className="Head">End Date</div>
                      <div className="Head">Est. Date</div>
                      <div className="Head">Status</div>
                  </div>
                  {listItems}
                </div>
                </div>
            </div>

            <div className="clear currentWork">
            <h2>Work In Progress </h2>
              <div className="floatLeft calsec">
              {/* <Calendar onChange={this.onChange} value={this.state.date}  /> */}
              </div>
              {/* {floatLeft currentWork } */}
              <div className="grid col-3">

                      <div className="prgressTask">
                          <h3>Task in progress</h3>
                          <h4>A/B testing</h4>
                          <span className="per">
                           <span className="prgstat" style={{background: '#5fa2dd',width:'50%'}}></span>
                          </span>
                          <span className="stausHed">Status
                          
                          </span>
                          <span className="status">On Hold</span>

                          <div className="btnwrp">
                            <a href="#">Pause</a>
                            <a href="#">Completed</a>
                          </div>
                      </div>
                      <div className="prgressTask">
                          <h3>Task in progress</h3>
                          <h4>A/B testing</h4>
                          <span className="per" >
                          <span className="prgstat" style={{background: '#f4b400',width:'25%'}}></span>
                          </span>
                          <span className="stausHed">Status</span>
                          <span className="status">On Hold</span>

                          <div className="btnwrp">
                            <a href="#">Pause</a>
                            <a href="#">Completed</a>
                          </div>
                      </div>
                      <div className="prgressTask">
                          <h3>Task in progress</h3>
                          <h4>A/B testing</h4>
                          <span className="per" >
                          <span className="prgstat" style={{background: '#0ca033',width:'75%'}}></span>
                          </span>
                          <span className="stausHed">Status</span>
                          <span className="status">On Hold</span>

                          <div className="btnwrp">
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

export default withRouter(Home);