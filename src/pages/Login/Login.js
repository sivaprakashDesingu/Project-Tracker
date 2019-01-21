import React, { Component } from 'react';
import './Login.css';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
    this.updateState = this.updateState.bind(this);
  }
  updateState(e) {
    this.setState({ data: e.target.value });
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

    isFloating(e) {
        var target =e.target;
        if(target.value.length<=0){
            target.parentNode.classList.remove('active');
            
        }else{
            target.parentNode.classList.add('active');
        }
    }
  render() {
    return (
        <div>
        <div class="login ">
            <div class="fromwrp clear">
                <div class="floatRight projectinfo">
                    <h1 class="manhead">Project Management</h1>
                    <p>Get started using a simplified management stystem that does this and that and some other things now.</p>
                    <a href='#' class="btn ">Register</a>
                </div>
                <div class="floatLeft loginFields">
                    <h1 class="manhead">Please Login</h1>
                    <form>
                        <div class="field">
                            
                            <input id='email' type="text" name="email" autoComplete='off'
                                                      
                            onBlur={this.isFloating}
                            
                            />
                            <label for="email">Email</label>
                        </div>
                        <div class="field">
                            
                            <input id="paswd" type="password" name="password" 
                             onBlur={this.isFloating}
                            />
                            <label for="paswd">Password</label>
                        </div>
                        <button class="btn " type="button">Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Login;