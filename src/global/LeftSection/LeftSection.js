import React, { Component } from 'react';
import logos from './../../assests/images/pro.png';

class LeftSection extends React.Component {

    render() {
        return (
            <aside>
                <div class="leftSections">
                <div class="profileSection">
                    <div class="userimage">
                        <img src={logos}  alt="user profile" />
                    </div>
                    <div class="userIfo">
                        <span class="name">Sivaprakash Desingu</span>
                        <span class="desi">Web Developer - HTML</span>
                    </div>
                </div>
                <div class="section1 emp">
                    <ul>
                        <li class="secHeading">
                            Activity
                        </li>
                        <li class="secLinks">
                            <span><i class="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Dashboard</span>
                        </li>
                        <li class="secLinks">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Email</span>
                        
                        </li>
                    </ul>
                </div>
                <div class="section1 lead">
                    <div class="secHeading">
                        <a href="#">Activity</a>
                        <ul>                        
                        <li class="secLinks">
                            <span><i class="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Group</span>
                        </li>
                        <li class="secLinks">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Reporting Employees</span>
                        
                        </li>
                        
                    </ul>
                    </div>
                    <div class="secHeading">
                        <a href="#">Attendace</a>
                        <ul>                        
                        <li class="secLinks">
                            <span><i class="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Group</span>
                        </li>
                        <li class="secLinks">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Reporting Employees</span>
                        
                        </li>
                        
                    </ul>
                    </div>
                    <div class="secHeading">
                        <a href="#">SEtting</a>
                        <ul>                        
                        <li class="secLinks">
                            <span><i class="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Group</span>
                        </li>
                        <li class="secLinks">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Reporting Employees</span>
                        
                        </li>
                        
                    </ul>
                    </div>
                    
                </div>
                </div>
                
                
            </aside>
        );
    }
}

export default LeftSection;