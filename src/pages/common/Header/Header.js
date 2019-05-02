import React, { Component } from 'react';
import { extendObservable } from 'mobx';
import { observer }  from 'mobx-react';
import PTStore from '../../server/PTStore';
import './Header.css';
import NewProjectForm from './../../newProForm/newProForm';
import { withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              whichForm:"",
              topSearch:''
        };

        this.openCreateProjectModel = this.openCreateProjectModel.bind(this);
        this.updateState = this.updateState.bind(this);
        this.isFloating = this.isFloating.bind(this);
      }


    updateState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    isFloating(e) {

        var target = e.target;
        if (target.value.length <= 0) {
            target.parentNode.classList.remove('active');
        } else {
            target.parentNode.classList.add('active');
        }
    }

      openCreateProjectModel(evt){
         
         document.getElementById("newProjectLightbox").classList.toggle("open");
         document.getElementById("newProjectLightboxInner").classList.toggle("open");
      }
    render() {
        return (
            <div>
                <div id="newProjectLightbox" className="lighbox"></div>
                <div id="newProjectLightboxInner" className="lightboxWrapper">
                    <span onClick={this.openCreateProjectModel} className="fa fa-times"></span>
                    <NewProjectForm />
                </div>
                
                
                <header>
                    <div className="clear">
                        <div className="logo floatLeft">
                            <a href="javascript:void(0);">
                                <img src="https://images1.content-hci.com/hca-cont/india/img/hcindia_idp_logo_v1.png" alt="HC Logo" width='204' height='50' />
                            </a>
                        </div>
                        



                        <div className="floatLeft leadsection">

                        
                           {(() => {
                                if (this.props.Role == "Senior Manager") {
                                    return (
                                        <div>
                                             <a id="NewTask" className="createProject" href="javascript:void(0);" onClick={this.openCreateProjectModel}>Create Task</a>
                                             <a id="addEmp" className="createEmp"  href="javascript:void(0);" onClick={this.openCreateProjectModel}>Add Employee</a>
                                       </div>
                                    )
                                }
                            })()}
                        </div>
                        
                        <div className="notification floatRight">
                            {/* <div className="floatLeft msgbox">
                                <a href="#">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                                <span className="alert">
                                    <span>6</span>
                                </span>
                                <div className="dropDown">
                                    <div className="ddwrp">
                                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                                        <div className="header">
                                            <h3>You have 3 messages</h3>
                                        </div>
                                        <div className="msgbody">
                                            <ul>
                                                <li className="clear">
                                                    <div className="floatLeft">
                                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                                    </div>
                                                    <div className="floatRight">
                                                        <span className="who">Shiva sent you a message</span>
                                                        <span className="when">30 Mins ago</span>
                                                    </div>
                                                </li>
                                                <li className="clear">
                                                    <div className="floatLeft">
                                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                                    </div>
                                                    <div className="floatRight">
                                                        <span className="who">Shiva sent you a message</span>
                                                        <span className="when">30 Mins ago</span>
                                                    </div>
                                                </li>
                                                <li className="clear">
                                                    <div className="floatLeft">
                                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                                    </div>
                                                    <div className="floatRight">
                                                        <span className="who">Shiva sent you a message</span>
                                                        <span className="when">30 Mins ago</span>
                                                    </div>
                                                </li>
                                                <li className="clear">
                                                    <div className="floatLeft">
                                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                                    </div>
                                                    <div className="floatRight">
                                                        <span className="who">Shiva sent you a message</span>
                                                        <span className="when">30 Mins ago</span>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="footer">
                                            <a href="#">
                                                Show all Messages
                                    </a>
                                        </div>
                                    </div>

                                </div>
                            </div> */}

                            <div className="headerRightWrapper floatRight">
                                <div className="user floatLeft">
                                    <a href="#">
                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="user_profile" />
                                        <span>{this.props.Name}</span>
                                    </a>
                                </div>
                             </div>
                            <div className="floatRight notbox">
                                <a href="#">
                                    <i className="fa fa-bell" aria-hidden="true"></i>
                                </a>
                                <span className="alert">
                                    <span>6</span>
                                </span>
                                <div className="dropDown">
                                    <div className="ddwrp">
                                        <i className="fa fa-caret-up" aria-hidden="true"></i>
                                        <div className="header">
                                            <h3>You have 3 messages</h3>
                                        </div>
                                        <div className="msgbody">
                                            <ul>
                                                <li className="clear">
                                                    <div className="floatLeft">
                                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                                    </div>
                                                    <div className="floatRight">
                                                        <span className="who">Shiva sent you a message</span>
                                                        <span className="when">30 Mins ago</span>
                                                    </div>
                                                </li>
                                                <li className="clear">
                                                    <div className="floatLeft">
                                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                                    </div>
                                                    <div className="floatRight">
                                                        <span className="who">Shiva sent you a message</span>
                                                        <span className="when">30 Mins ago</span>
                                                    </div>
                                                </li>
                                                <li className="clear">
                                                    <div className="floatLeft">
                                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                                    </div>
                                                    <div className="floatRight">
                                                        <span className="who">Shiva sent you a message</span>
                                                        <span className="when">30 Mins ago</span>
                                                    </div>
                                                </li>
                                                <li className="clear">
                                                    <div className="floatLeft">
                                                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                                    </div>
                                                    <div className="floatRight">
                                                        <span className="who">Shiva sent you a message</span>
                                                        <span className="when">30 Mins ago</span>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="footer">
                                            <a href="#">Show all Messages </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="headSearch floatRight">
                            <div className="sachinpt floatLeft"> 
                                <input id="topSearch" type="text" name="topSearch"
                                 onBlur={this.isFloating}
                                 onChange={this.updateState}
                                  />    
                                <label for="topSearch">Type here.....</label>
                            </div>
                            <div className="sachbtn floatLeft">
                                <button class="btn" aria-label="Search" >
                                    <span className="fa fa-search"></span>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default withRouter(Header);