import React, { Component } from 'react';
import { extendObservable } from 'mobx';
import { observer }  from 'mobx-react';
import PTStore from '../server/PTStore';
import './newProForm.css';
import Server from '../server/server'
import {dateTimeNow} from '../server/TodayDateTime';
import Cookies from 'universal-cookie';
import { func } from 'prop-types';
const cookies = new Cookies();




class NewProjectForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Alert Message 
            sucessMessage:'',
            errorMessage:'',
            empFilteredList:[],
            // New employee 
            employeeEmailID : '',
            employeeID : 'HCI_',
            proTitle: 'Extract Transcription form Video',
            Discription: 'Extract Transcription form Vidoe',
            Priority:'P1',
            assignTo:'sivaprakash@idp.com',
            dtbco:'26/2/2019',
            Reference:'https://aws.amazon.com/transcribe/',
            items : [
                { EmpID: 'HCI_001', EmpName: 'Sivaprakash D'},
                { EmpID: 'HCI_002', EmpName: 'Bubesh'},
                { EmpID: 'HCI_003', EmpName: 'Sivakumar'},
                { EmpID: 'HCI_004', EmpName: 'Praveen'},
                { EmpID: 'HCI_005', EmpName: 'Prem' }
            ],
            show: []
        }
        var list =[];
        var showList =[];
        var empFilteredList=[]; 
        
        this.updateState = this.updateState.bind(this);
        this.isNewProjectAssigned = this.isNewProjectAssigned.bind(this);   
        this.employeeListAjax = this.employeeListAjax.bind(this);
        this.empListInDropdown = this.empListInDropdown.bind(this);
        this.isEmployeeSelect = this.isEmployeeSelect.bind(this);
    }

    componentDidMount() {
        // console.log(filtered);
        this.employeeListAjax(); 
    }
    componentDidUpdate(){
        //this.isNewProjectAssigned(); 
    }
    updateState(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    isNewProjectAssigned(){
         // Loading Subordinates in the array 
         var data = {};
         var URL;
         if(this.props.FromType === 'NewTask'){
            data = {
                proTitle: this.state.proTitle,
                Discription: this.state.Discription,
                Priority:this.state.Priority,
                assignTo:this.state.assignTo,
                dtbco:this.state.dtbco,
                Reference:this.state.Reference,
                createdBy:cookies.get('loggeinEmpId'),
                projectStatus:'Pending',
                CreateOn:dateTimeNow(),
            }
            URL = 'isTaskAssignedSuccesssfully';
         }else{
            data = {
               id:this.state.employeeID,
               eid: this.state.employeeEmailID,
               repoTo: cookies.get('loggeinEmpId')
            }
            URL = 'addNewEmplyee';
         }
        
        console.log(data);
        fetch(Server.backendServer+URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data);
            if(this.props.FromType === 'NewTask'){
                this.setState({sucessMessage:'Project assigned successfully',errorMessage:'Unable to create project, Something went wrong.'}) 
            }else{
                this.setState({sucessMessage:'Employee has been added',errorMessage:'Unable to add employee, Something went wrong.'}) 
            }
            if(data.affectedRows==1){
                document.getElementById(this.props.FromType+"sucessMessage").classList.add("show");
                document.getElementById(this.props.FromType+"errorMessage").classList.remove("show");
            }else{
                document.getElementById(this.props.FromType+"sucessMessage").classList.add("show");
                document.getElementById(this.props.FromType+"errorMessage").classList.remove("show");
            }    
            
        }.bind(this)).catch(function(err) {
            console.log(err)
        });
    }

    isFloating(e) {
        //alert("hi");
        var target = e.target;
        if (target.value.length <= 0) {
            target.parentNode.classList.remove('active');

        } else {
            target.parentNode.classList.add('active');
        }
    }

    employeeListAjax(e){
        var data = {
            reportingID: cookies.get("loggeinEmpId")
        }
        console.log(data);
        fetch(Server.backendServer+"subordinatesList", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            //console.log("Employees are"+JSON.stringify(data));
            var ddemp = document.querySelector('#empDdwn');
            console.log(ddemp);
            if(data.length>=1){
                ///  document.querySelector("#empDdwn").classList.add("open");
                //document.getElementById("empDdwn").classList.add("open");
                PTStore.EmployeeList = data;   
                console.log("Employees are"+PTStore.EmployeeList); 
            }else{
                //document.querySelector("#empDdwn").classList.remove("open");
                //document.getElementById("empDdwn").classList.remove("open");
            }    
           
        }.bind(this)).catch(function(err) {
            console.log(err);
           
        })
    }
    
    
    empListInDropdown(e){

        this.setState({
            empFilteredList:PTStore.EmployeeList.filter(function (str) {
                return str.EmpName.toUpperCase().includes(e.target.value.toUpperCase());
            })
        }) ;

    }
    isEmployeeSelect(evt){
        console.log(evt.target);
        this.refs.assignTo.value= evt.target.innerHTML;
        //this.state.empFilteredList.splice(0);
        document.getElementById("empDdwn").classList.remove("open");
        console.log(this.state.empFilteredList);
        //this.setState({assignTo:evt.target});
        //this.setState({ [evt.target.name]: evt.target.value });

    }

    render() {
        return (
            <div className="newProFormWrap">
                    {this.props.FromType==="NewTask" ? 
                        /* TRUE STATEMENT START*/
                        <form className="newProForm newTask">
                        <h2>Create a  task </h2>
                        <div className="TaskWrapper">
                            <div className="field">
                                <input id='proTitle' type="text" name="proTitle" autoComplete='off'
                                    onChange={this.updateState}
                                    onBlur={this.isFloating}
                                />
                                <label htmlFor="email">Project Title</label>
                            </div>

                            <div className="field">
                            <textarea id="Discription" rows='5'  name="Discription" onChange={this.updateState} onBlur={this.isFloating}></textarea>
                                <label htmlFor="Discription">Discription</label>
                            </div>

                            <div className="field">
                                <input id='Priority' type="text" name="Priority" autoComplete='off'
                                    onChange={this.updateState}
                                    onBlur={this.isFloating}
                                />
                                <label htmlFor="Priority">Priority</label>
                            </div>
                            <div className="field">
                                <input id='assignTo' type="text" ref="assignTo" name="assignTo" autoComplete='off'
                                    onChange={evt => {
                                        this.updateState.call(this, evt);
                                        this.empListInDropdown.call(this, evt);
                                    }}
                                    onBlur={this.isFloating}
                                    
                                />
                                <label htmlFor="assignTo">Assign To</label>

                                {/* <div id="empDdwn" className={"DropDown"+ this.state.empFilteredList.length>=1}> */}
                                <div id="empDdwn" className={this.state.empFilteredList.length>=1 ? 'DropDown open' : 'DropDown'}>      
                                    <ul >
                                         
                                    {this.state.empFilteredList.length>=1 ? (
                                        this.state.empFilteredList.map(function(emp,index){
                                            return (
                                                <li onClick={this.isEmployeeSelect} key={emp.EmpName}>{emp.EmpName}</li>
                                            )
                                        },this)
                                    ) : (
                                        <li className="noResult">No List Found</li>
                                    )}
                                   
                                    </ul>
                               </div>
                            </div>                
                            <div className="field">
                                <input id='dtbco' type="text" name="dtbco" autoComplete='off'
                                    onChange={this.updateState}
                                    onBlur={this.isFloating}
                                />
                                <label htmlFor="dtbco">Date to be Completed</label>
                            </div>

                            <div className="field">
                            <textarea id="Reference" name="Reference" rows='5' onChange={this.updateState} onBlur={this.isFloating}></textarea>
                                <label htmlFor="Reference">Reference</label>
                            </div>       

                            <div className="alertWrapper">
                                <p id={this.props.FromType+"sucessMessage"} className="sucessMessage">Project assigned successfully.</p>
                                <p id={this.props.FromType+"errorMessage"} className="errorMessage">Unable to create project, Something went wrong.</p>
                            </div>
                            <div className="btnwrpr clear">
                                <button type="button" onClick={this.isNewProjectAssigned} className="floatRight btn orgbtn">Assign Task</button>
                            </div>
                    
                        </div> 
                        </form>
                        /* Addine New Task */
                        /* TRUE STATEMENT START*/
                        :  /* ELSE LOOP START*/
                        /* Addine New Employee */
                        <form className="newProForm addEmployee">
                        <h2>Add a new employee</h2>
                        <div className="NewEmpWrapper">
                            <div className="field">
                                <input id='employeeID' type="text" name="employeeID" autoComplete='off'
                                    onKeyPress={this.getEmpList}
                                    onChange={this.updateState} 
                                    onBlur={this.isFloating}
                                    
                                />
                                <label htmlFor="employeeID">Employee ID</label>
                            </div>
                            <div className="field">
                                <input id='employeeEmailID' type="email" name="employeeEmailID" autoComplete='off'
                                    onKeyPress={this.getEmpList}
                                    onChange={this.updateState} 
                                    onBlur={this.isFloating}
                                    
                                />
                                <label htmlFor="employeeEmailID">Employee Mail ID</label>
                            </div>
                            <div className="alertWrapper">
                                <p id={this.props.FromType+"sucessMessage"} className="sucessMessage">New employee added successfully.</p>
                                <p id={this.props.FromType+"errorMessage"} className="errorMessage">Unable to add new employee, Something went wrong.</p>
                            </div>
                            <div className="btnwrpr clear">
                                <button type="button" onClick={this.isNewProjectAssigned} className="floatRight btn orgbtn">Add Employee</button>
                            </div>
                        </div>
                        </form>
                    /* Addine New Employee */
                    /* ELSE LOOP END*/
                    }                 

            </div>
        );
    }

}
export default observer(NewProjectForm);