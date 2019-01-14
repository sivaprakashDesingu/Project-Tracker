import React, { Component } from 'react';
import './Header.css';
import logo from './../assests/images/logo/logo.png';

class Header extends React.Component {


    render() {
        return (
            <div>
    <header>
        <div class="clear">
            <div class="logo floatLeft">
                <a href="#">
                    <img src="https://images1.content-hci.com/hca-cont/india/img/hcindia_idp_logo_v1.png" alt="HC Logo" width='204' height='50' />
                </a>
            </div>
            <div class="notification floatLeft">
                <div class="floatLeft msgbox">
                    <a href="#">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    <span class="alert">
                                <span>6</span>
                    </span>
                    <div class="dropDown">
                        <div class="ddwrp">
                            <i class="fa fa-caret-up" aria-hidden="true"></i>
                            <div class="header">
                                <h3>You have 3 messages</h3>
                            </div>
                            <div class="msgbody">
                                <ul>
                                    <li class="clear">
                                        <div class="floatLeft">
                                            <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                        </div>
                                        <div class="floatRight">
                                            <span class="who">Shiva sent you a message</span>
                                            <span class="when">30 Mins ago</span>
                                        </div>
                                    </li>
                                    <li class="clear">
                                        <div class="floatLeft">
                                            <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                        </div>
                                        <div class="floatRight">
                                            <span class="who">Shiva sent you a message</span>
                                            <span class="when">30 Mins ago</span>
                                        </div>
                                    </li>
                                    <li class="clear">
                                        <div class="floatLeft">
                                            <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                        </div>
                                        <div class="floatRight">
                                            <span class="who">Shiva sent you a message</span>
                                            <span class="when">30 Mins ago</span>
                                        </div>
                                    </li>
                                    <li class="clear">
                                        <div class="floatLeft">
                                            <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                        </div>
                                        <div class="floatRight">
                                            <span class="who">Shiva sent you a message</span>
                                            <span class="when">30 Mins ago</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div class="footer">
                                <a href="#">
                                    Show all Messages 
                                    </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="floatLeft notbox">
                    <a href="#">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                    </a>
                    <span class="alert">
                                <span>6</span>
                    </span>
					<div class="dropDown">
                        <div class="ddwrp">
                            <i class="fa fa-caret-up" aria-hidden="true"></i>
                            <div class="header">
                                <h3>You have 3 messages</h3>
                            </div>
                            <div class="msgbody">
                                <ul>
                                    <li class="clear">
                                        <div class="floatLeft">
                                            <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                        </div>
                                        <div class="floatRight">
                                            <span class="who">Shiva sent you a message</span>
                                            <span class="when">30 Mins ago</span>
                                        </div>
                                    </li>
                                    <li class="clear">
                                        <div class="floatLeft">
                                            <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                        </div>
                                        <div class="floatRight">
                                            <span class="who">Shiva sent you a message</span>
                                            <span class="when">30 Mins ago</span>
                                        </div>
                                    </li>
                                    <li class="clear">
                                        <div class="floatLeft">
                                            <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                        </div>
                                        <div class="floatRight">
                                            <span class="who">Shiva sent you a message</span>
                                            <span class="when">30 Mins ago</span>
                                        </div>
                                    </li>
                                    <li class="clear">
                                        <div class="floatLeft">
                                            <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="message1" />
                                        </div>
                                        <div class="floatRight">
                                            <span class="who">Shiva sent you a message</span>
                                            <span class="when">30 Mins ago</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div class="footer">
                                <a href="#">
                                    Show all Messages 
                                    </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="headerRightWrapper floatRight">
                <div class="user floatLeft">
                    <a href="#">
                        <img src="http://squaredesigns.net/jasmine/img/av1.png" alt="user_profile" />
                        <span>Shiva</span>
                    </a>
                </div>

            </div>
        </div>
    </header>
</div>
        );
    }
}

export default Header;