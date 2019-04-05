import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';
import './Dashboard.css';
import Server from '../server/server';
import Tile from './../common/Tile/Tile.js';
const cookies = new Cookies();


class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
        
          date: new Date(),
        //   paramValue: this.props.location.state,
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
          /* GET NO OF PROJECT ASSIGNED BY LEAD */
    
          /* GET Report Sheet of taks */
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
      /* GET GET Report Sheet of taks */
    
    
      }
      render() {
        return (


          <div id="DashPage" className="DashPage mainPage">
            
            {/*TITLE SECTION */}
            <div className="flex">
            {
              this.state.projectStatusList.map(function(res){
                  if(res.ProjectStatus==="Total"){
                    return (
                      <Tile CssClass="totalCount forder1" count={res.counts} tileName={res.ProjectStatus} />
                    )
                  }else if(res.ProjectStatus==="Completed"){
                    return (
                      <Tile   CssClass="CompletedCount forder2" count={res.counts} tileName={res.ProjectStatus} />
                    )
                  }else if(res.ProjectStatus==="Pending"){
                    return (
                      <Tile CssClass="PendingCount forder3" count={res.counts} tileName={res.ProjectStatus} />
                    )
                  }
                })
              }
            </div>
            {/*TITLE SECTION */}


             {/*REPORT SECTION  */}
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
                    this.state.items.map(function(item,index) {
                      return (
                        <div key={index} className="grid col-7">
                          <div className="gridBody">{'PM-'+item.ProjectId}</div>
                          <div className="gridBody">{item.ProjectTitle}</div>
                          <div className="gridBody">
                          <div className="assProfle">
                          {
                            item.ProjectAssignedTo.split(",").slice(0,2).map(function(place,index){
                                  return(
                                    <a key={index} href="#" className="profilepic">
                                    <img key={index}  src={'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w'} alt={'profle'} />
                                    {/* <img src="{'./../../assests/images/'+place+'.png'}" alt={'profle'} />  */}
                                    
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
                    <a href="#">View all <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                  </div>
                  </div>
                </div>
                </div>
            </div>
             {/*REPORT SECTION  */}


          </div>
        );
      }
}

export default withRouter(Dashboard);