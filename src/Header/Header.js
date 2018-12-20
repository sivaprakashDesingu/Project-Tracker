import React, { Component } from 'react';
import './Header.css';
import logo from './../assests/images/logo/logo.png';

class Header extends React.Component {


    render() {
        return (
            <div>
                <header>
                    <div class="clear headerWrappper">
                        <div class="floatLeft logo ">
                            <img src={logo}/>
                        </div>
                        <div class="floatRight menu ">
                            <ul>
                                <li>
                                    <a href="javascript:void(0);">Signup</a>
                                </li>
                                <li class="pipSep">
                                    |
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Login</a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                </header>
            </div>
        );
    }
}

export default Header;