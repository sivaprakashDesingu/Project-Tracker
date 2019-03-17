import React, { Component } from 'react';
import './Login.css';
import image from '../../assests/images/wlcm.png';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formHeading:'Login to your account',
            
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
                        <div className="floatLeft projectinfo">
                           
                            <img src={image} width='600' height='500' alt="Welcome Image" />
                            
                        </div>
                        <div className="floatRight loginFields">
                            <div className="frmwrapper">
                            <div className="l1hnd">
                            <h1 className="manhead">Project Management</h1>
                                <p>Get started using a simplified management system that does this and that and some other things now.</p>
                            </div>
                            
                            <h2 className="manhead">{this.state.formHeading}</h2>
                            <form>
                                <div className="field">

                                    <input id='email' type="text" name="email" autoComplete='off'
            
                                        onBlur={this.isFloating}
                                        onChange={this.updateState}
                                    />
                                    <label for="email">Email<sup>*</sup></label>
                                </div>
                                <div className="field">

                                    <input id="paswd" type="password" name="password"
                                        onBlur={this.isFloating}
                                        onChange={this.updateState}
                                    />
                                    <label for="paswd">Password<sup>*</sup></label>
                                </div>
                                <div className="forgot clear">
                                    <a className="floatRight" href="#">Forgot your password?</a>
                                   
                                    
                                </div>
                                <button className="btn "  onClick={this.isLoggedin} type="button">Login</button>
                                
                                {/* { this.state.showResults ? <Results /> : null } */}
                                

                            </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;