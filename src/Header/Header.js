import React, { Component } from 'react';
import './Header.css';
import logo from './../assests/images/logo/logo.png';

class Header extends React.Component {


    render() {
        return (
            <div>
    <header>
        <div className="clear">
            <div className="logo floatLeft">
                <a href="#">
                    <img src="https://images1.content-hci.com/hca-cont/india/img/hcindia_idp_logo_v1.png" alt="HC Logo" width='204' height='50' />
                </a>
            </div>
            <div className="notification floatLeft">
                <div className="floatLeft msgbox">
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
                </div>
                <div className="floatLeft notbox">
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
                                <a href="#">
                                    Show all Messages 
                                    </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="headerRightWrapper floatRight">
                <div className="user floatLeft">
                    <a href="#">
                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="user_profile" />
                        <span>Shiva</span>
                    </a>
                </div>

            </div> */}

            <div className="floatRight leadsection">
                <a href="#">Create Project</a>
            </div>
        </div>
    </header>
</div>
        );
    }
}

export default Header;