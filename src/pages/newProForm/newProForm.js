import React, { Component } from 'react';
import './newProForm.css';


class NewProjectForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'sivaprakash.d@idp.com',
            password: 'shiva'
        }
        this.updateState = this.updateState.bind(this);
      
        
    }

    updateState(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
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
                    <label for="email">Project Title</label>
                </div>

                <div className="field">
                    <input id='assignTo' type="text" name="assignTo" autoComplete='off'
                        onChange={this.updateState}
                        onBlur={this.isFloating}
                    />
                    <label for="assignTo">Assign To</label>
                </div>

                <div className="field">
                    <input id='Priority' type="text" name="Priority" autoComplete='off'
                        onChange={this.updateState}
                        onBlur={this.isFloating}
                    />
                    <label for="Priority">Priority</label>
                </div>
                <div className="field">
                    <input id='dtbco' type="text" name="dtbco" autoComplete='off'
                        onChange={this.updateState}
                        onBlur={this.isFloating}
                    />
                    <label for="dtbco">Date to be Completed</label>
                </div>

                <div className="field">
                <textarea id="Discription" rows='5'  name="Discription" onChange={this.updateState} onBlur={this.isFloating}></textarea>
                    <label for="Discription">Discription</label>
                </div>

                <div className="field">
                <textarea id="Reference" name="Reference" rows='5' onChange={this.updateState} onBlur={this.isFloating}></textarea>
                    <label for="Reference">Reference</label>
                </div>

                


                <div className="btnwrpr clear">
                    <button type="button" className="floatRight btn orgbtn">Submit</button>
                </div>
                </form>
            </div>
        );
    }

}

export default NewProjectForm;