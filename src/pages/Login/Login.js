import React, { Component } from 'react';
import './Login.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formHeading:'Please Login',
            
        }
        this.updateState = this.updateState.bind(this);
        this.isLoggedin = this.isLoggedin.bind(this);
        
        
    }
    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    /* handleOnClick = () => {
       this.props.history.push({
         pathname: '/Home',
         state: {
           un: this.state.data,
           paswd: this.state.data2,
         }
       });
     }*/


     isLoggedin = () =>{
         
        var data = {
            id: this.state.email,
            password: this.state.password
        }
        console.log(data)
        fetch("http://localhost:8000/isValiduser", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data.length==1){
                cookies.set('loggeinEmpId', data[0].EmpID, { path: '/' });
                cookies.set('loggeinEmpName', data[0].EmpName, { path: '/' });
                cookies.set('loggeinEmpEmail', this.state.email, { path: '/' });
                this.props.history.push({
                    pathname: '/Home',
                    state: {
                      Empemail: this.state.email,
                      EmpName:data[0].EmpName,
                      employeeId: data[0].EmpID
                    }
                  });
            }
        }.bind(this)).catch(function(err) {
            console.log(err)
        });
    };

   
    isFloating(e) {

        var target = e.target;
        if (target.value.length <= 0) {
            target.parentNode.classList.remove('active');

        } else {
            target.parentNode.classList.add('active');
        }
    }
    render() {
        return (
            <div>
                <div className="login ">
                    <div className="fromwrp clear">
                        <div className="floatRight projectinfo">
                            <h1 className="manhead">Project Management</h1>
                            <p>Get started using a simplified management stystem that does this and that and some other things now.</p>
                            
                        </div>
                        <div className="floatLeft loginFields">
                            <h1 className="manhead">{this.state.formHeading}</h1>
                            <form>
                                <div className="field">

                                    <input id='email' type="text" name="email" autoComplete='off'
            
                                        onBlur={this.isFloating}
                                        onChange={this.updateState}
                                    />
                                    <label for="email">Email</label>
                                </div>
                                <div className="field">

                                    <input id="paswd" type="password" name="password"
                                        onBlur={this.isFloating}
                                        onChange={this.updateState}
                                    />
                                    <label for="paswd">Password</label>
                                </div>
                                
                                {/* { this.state.showResults ? <Results /> : null } */}
                                <button className="btn "  onClick={this.isLoggedin} type="button">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;