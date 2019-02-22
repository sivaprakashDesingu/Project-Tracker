import React, { Component } from 'react';
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
            proTitle: 'Extract Transcription form Video',
            Discription: 'Extract Transcription form Vidoe',
            Priority:'P1',
            assignTo:'sivaprakash@idp.com',
            dtbco:'26/2/2019',
            Reference:'https://aws.amazon.com/transcribe/',
            
        }
        this.updateState = this.updateState.bind(this);
        this.isNewProjectAssigned = this.isNewProjectAssigned.bind(this);   
    }

    componentDidMount() {
        /*svar data = {
            id: cookies.get('loggeinEmpId')
        }
        fetch(Server.backendServer+"noOfProjectsByLead",{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response){
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data){
            console.log(data);

        }.bind(this)).catch(function(err){
            console.log(err)
        });*/
    }

    updateState(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    isNewProjectAssigned(){
        var data = {
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
        console.log(data);
        fetch(Server.backendServer+"isTaskAssignedSuccesssfully", {
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
            if(data.affectedRows==1){
                document.getElementById("sucessMessage").classList.add("show");
                document.getElementById("errorMessage").classList.remove("show");
            }else{
                document.getElementById("errorMessage").classList.add("show");
                document.getElementById("sucessMessage").classList.remove("show");
                
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
    render() {
        return (
            <div className="newProFormWrap">
                <form className="newProForm">
                    <h2>Create a new task </h2>
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
                    <input id='assignTo' type="text" name="assignTo" autoComplete='off'
                        onChange={this.updateState}
                        onBlur={this.isFloating}
                    />
                    <label htmlFor="assignTo">Assign To</label>
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
                    <p id="sucessMessage" className="sucessMessage">Project assigned successfully.</p>
                    <p id="errorMessage" className="errorMessage">Unable to create project, Something went wrong.</p>
                </div>
                <div className="btnwrpr clear">
                    <button type="button" onClick={this.isNewProjectAssigned} className="floatRight btn orgbtn">Submit</button>
                </div>
                </form>
            </div>
        );
    }

}

export default NewProjectForm;