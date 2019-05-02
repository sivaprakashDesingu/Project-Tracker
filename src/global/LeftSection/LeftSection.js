import React, { Component } from 'react';
import logos from './../../assests/images/pro.png';
import { withRouter } from 'react-router-dom'
class LeftSection extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
              
        };
      }

    render() {
        return (
            <aside>
                <div className="leftSections">
                {/* <div className="profileSection">
                    <div className="userimage">
                        <img src={logos}  alt="user profile" />
                    </div>
                    <div className="userIfo">
                        <span className="name">{this.props.Name}</span>
                        <span className="desi">{this.props.Designation}</span>
                    </div>
                </div> */}
                <div className="section1 emp">
                <ul>                        
                        <li className="secLinks active">
                            <span><i className="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Dashboard</span>
                        </li>
                        <li className="secLinks">
                        <span><i className="fa fa-file-text-o" aria-hidden="true"></i></span>
                            <span>Report</span>
                        
                        </li>
                        <li className="secLinks">
                        <span><i className="fa fa-setting" aria-hidden="true"></i></span>
                            <span>Settings</span>
                        
                        </li>                        
                    </ul>
                </div>
                <div className="section1 lead">
                    <div className="secHeading">
                        <ul>                        
                        <li className="secLinks active">
                            <span><i className="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Dashboard</span>
                        </li>
                        <li className="secLinks">
                        <span><i className="fa fa fa-users" aria-hidden="true"></i></span>
                            <span>Sub ordinates</span>
                        
                        </li>

                        <li className="secLinks">
                        <span><i className="fa fa-file-text-o" aria-hidden="true"></i></span>
                            <span>Report</span>
                        
                        </li>
                        <li className="secLinks">
                        <span><i className="fa fa-cog" aria-hidden="true"></i></span>
                            <span>Settings</span>
                        
                        </li>                        
                    </ul>
                    </div>
                    {/* <div className="secHeading">
                        <a href="#">Attendace</a>
                        <ul>                        
                        <li className="secLinks">
                            <span><i className="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Group</span>
                        </li>
                        <li className="secLinks">
                        <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Reporting Employees</span>
                        
                        </li>
                        
                    </ul>
                    </div> */}
                    {/* <div className="secHeading">
                        <a href="#">SEtting</a>
                        <ul>                        
                        <li className="secLinks">
                            <span><i className="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Group</span>
                        </li>
                        <li className="secLinks">
                        <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Reporting Employees</span>
                        
                        </li>
                        
                    </ul>
                    </div> */}
                    
                </div>
                </div>
                
                
            </aside>
        );
    }
}

export default withRouter(LeftSection);