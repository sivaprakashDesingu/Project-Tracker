import React, { Component } from 'react';
import { observer } from 'mobx-react';
/*Custome pages */
import Header from './../common/Header/Header';
import Footer from './../common/Footer/Footer';
import LeftSection from './../common/LeftSection/LeftSection';
import Employee from './../Employee/Employee.js';
import Dashboard from './../Dashboard/Dashboard.js';
import PTStore from '../server/PTStore'
import Server from '../server/server';
import Cookies from 'universal-cookie';
import './Home.css';
const cookies = new Cookies();
/*Custome pages */


class Home extends React.Component {
  
  constructor(props) {
    super(props);

    this.pages={
      dashBoard:true,
      Subordinate:false
    }
    this.state = {
      //paramValue: this.props.location.state,
      LoggedinEmpDet:[],
      isDirectReportingPerson:false,  
    }
  }




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
  }

  // updateData(){
  //   MyStore.myData ="siva";
  // }

  render() {
    return (
      <div>
        {/* {MyStore.myData}
        <div onClick={this.updateData}>Click me</div> */}
          {/* <!-- Header --> */}
          {
            this.state.LoggedinEmpDet.map(function(emp){
              return (
                <Header Name={emp.EmpName} Role={emp.Designation}/>
              )
            })

          }
          {/* <!-- Header --> */}

          {/* MAIN LANDING SECTION */}
          <div className="dashboard grid col-2 ">
            {/*LEFT  SECTION */}
            <div id="allMainPage" className=" leftSection">
              {
                  this.state.LoggedinEmpDet.map(function(emp){
                    return (
                      <LeftSection  Name={emp.EmpName} Designation={emp.Designation} />
                    )
                  })
              }
            </div>
            {/*LEFT  SECTION */}

            {/*RIGHT  SECTION */}
            <div className=" rightSection" >
            {(() => {
              if (PTStore.pages.activePage == 'DashBoard') {
                return (
                  <div>{/* DASHBOARD PAGE */}<Dashboard />{/* DASHBOARD PAGE */}</div>
                )
              }else if(PTStore.pages.activePage == 'EmployeePage'){
                return (
                  <div>{/* Employee PAGE */}<Employee />{/* Employee PAGE */}</div>
                )
              } 
             })()}
            </div> 
            {/*RIGHT SECTION */}
            
          </div>
          {/* MAIN LANDING SECTION */}


          {/* FOOTER SECTION */}
          <Footer />
          {/* FOOTER SECTION */}
      </div>
    )
  }
}

export default observer(Home);