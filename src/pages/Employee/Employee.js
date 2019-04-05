import React, { Component } from 'react';
import './Employee.css'
import Cookies from 'universal-cookie';
import { extendObservable } from 'mobx';
import { observer }  from 'mobx-react';

import PTStore from '../server/PTStore'
const cookies = new Cookies();


class Employees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            EmployeeList:[]
            
        }
    }


    componentDidMount() {
        /* GET subordinates list */
        console.log(cookies.get('loggeinEmpId'));
        var data = {
            reportingID: cookies.get('loggeinEmpId')
        }
        fetch(PTStore.backendServer+"subordinatesList",{
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
            this.setState({EmployeeList:res});    
        }.bind(this)).catch(function(err){
            console.log(err)
        });
        /* GET subordinates list */
    }

    render(){
        return(
            <seciton id="EmployeePage" className="EmployeePage mainPage">
                <div className="grid columnautoFit">

                {
                    this.state.EmployeeList.map(function(emps){
                        return (
                            <div className="empProfieCard">
                                <div class="profile clear">
                                <div className="primg floatLeft">
                                <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&amp;s=9358d797b2e1370884aa51b0ab94f706&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80%20500w" class="thumbnail" />
                                </div>
                                <div className="prcontent floatLeft">
                                <h3 class="name">{emps.EmpName}</h3>
                                    <p class="title">{emps.Designation} - {emps.Team}</p>
                                    <p class="title">{emps.EmpEmailID}</p>
                                    
                                </div>
                                </div>

                                <div className="prcount grid col-3">
                                    <div className="contList total">
                                        <span className="Title ">Total Project</span>
                                        <span className="pcount ">4</span>
                                    </div>
                                    <div className="contList completed">
                                        <span className="Title ">Completed Project</span>
                                        <span className="pcount">2</span>
                                    </div>
                                    <div className="contList pending">
                                        <span className="Title ">Pending Project</span>
                                        <span className="pcount">2</span>
                                    </div>
                                </div>
                                <div className="currentProject">
                                <button type="button" class="btn">Assign task</button>
                                    </div>
                        
                                </div>
                        )
                    })

                 } 
                  
                    {/* <!-- Single Profile Card  --> */}
                    
                    {/* <!-- Single Profile Card  --> */}

                    


                   

                </div>

            </seciton>
        )
    }
}

export default observer(Employees);