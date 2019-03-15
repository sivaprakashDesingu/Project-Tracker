import React, { Component } from 'react';
// import Header from './../Header/Header.js'
import Header from './../common/Header/Header.js';
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
      // items : [
      //   { id: 'PM-00001', task: 'Drag and Drog Drag and Drog Drag and Drog', assignTo:"http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png", startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done'},
      //   { id: 'PM-00002', task: 'Voice API', assignTo:"http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png", startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done'},
      //   { id: 'PM-00002', task: 'Network API', assignTo:"http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png", startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done' },
      //   { id: 'PM-00003', task: 'PGS Fundig page', assignTo:"http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png", startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done'},
      //   { id: 'PM-00004', task: 'PGS Newsletter', assignTo:"http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png,http://localhost:3000/static/media/pro.9726ea3d.png", startDate:'Jan 3 2019',endDate:'Jan 13 2019',estDate:'Jan 13 2019',Status:'Done' }
      // ],
      paramValue: this.props.location.state,
      LoggedinEmpDet:[],
      isDirectReportingPerson:false,
      projectStatusList:[],
      items:[]   
    }
  }

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

      /* GET NO OF PROJECT aSSIGNED BY LEAD */
    fetch(Server.backendServer+"taskReportofSub",{
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
      this.setState({items:res});    
  }.bind(this)).catch(function(err){
      console.log(err)
  });
  /* GET NO OF PROJECT aSSIGNED BY LEAD */


  }
  render() {
    return (
      <div>
        {/* <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
       
        <Header Role={this.state.isDirectReportingPerson}/>
        <div className=" dashboard grid col-2 ">
          <div className=" leftSection">
            {
                this.state.LoggedinEmpDet.map(function(emp){
                  return (
                  <LeftSection Name={emp.EmpName} Designation={emp.Designation} />
                  )
                })

            }
          </div>
          <div className=" rightSection" >
            
            <div className="flex">
            {
              this.state.projectStatusList.map(function(res){
                  if(res.ProjectStatus==="Total"){
                    return (
                      <Tile Class="totalCount forder1" count={res.counts} tileName={res.ProjectStatus} />
                    )
                  }else if(res.ProjectStatus==="Completed"){
                    return (
                      <Tile   Class="CompletedCount forder2" count={res.counts} tileName={res.ProjectStatus} />
                    )
                  }else if(res.ProjectStatus==="Pending"){
                    return (
                      <Tile Class="PendingCount forder3" count={res.counts} tileName={res.ProjectStatus} />
                    )
                  }
                })
              }
            </div>

            <div className="statsInfro clear">
              <div className="floatLeft overall">
                {/* <h2>Task Sheet</h2> */}
                <div className="chatwrp timst">
                  <div className="grid col-2">
                  <div className="MHead"><h2>Reports</h2> </div>
                  <div className="MHead">Sort <span className="spriteImage sorticon"></span></div>
                  </div>

                  <div className="grid col-7">
                      <div className="Head">Task id </div>
                      <div className="Head">Task Name</div>
                      <div className="Head">Assigned To</div>
                      <div className="Head">Start Date</div>
                      <div className="Head">End Date</div>
                      <div className="Head">Est. Date</div>
                      <div className="Head">Status</div>
                  </div>
                  {
                    this.state.items.map(function(item) {
                      return (
                        <div className="grid col-7">
                          <div className="gridBody">{'PM-'+item.ProjectId}</div>
                          <div className="gridBody">{item.ProjectTitle}</div>
                          <div className="gridBody">
                          <div className="assProfle">
                          {
                            item.ProjectAssignedTo.split(",").slice(0,2).map(function(place,index){
                                  return(
                                    <a href="#" className="profilepic">
                                    {/* <img src={'http://localhost:3000/static/media/'+place+'.png'} alt={'profle'} /> */}
                                    <img src="{'./../../assests/images/'+place+'.png'}" alt={'profle'} /> 
                                    </a>
                                  )
                            })
                           
                          }
                           <a href="#"  className="countpic"><span className="count">{(item.ProjectAssignedTo.split(",").length)-2}+</span></a>
                           </div>
                          </div>
                          <div className="gridBody">{item.ProjectTakenTime ? item.ProjectTakenTime : '-'  } </div>
                          <div className="gridBody">{item.ProjectFinishedDate ? item.ProjectFinishedDate : '-'  } </div>
                          <div className="gridBody">{item.ProjectEstimatedFinishDate}</div>
                          <div className="gridBody">{item.ProjectStatus}</div>
                        </div>
                      );
                    })
                  }

                  <div className="grid">
                  <div className="viewAll">
                    <a href="#">View all</a>
                  </div>
                  </div>
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