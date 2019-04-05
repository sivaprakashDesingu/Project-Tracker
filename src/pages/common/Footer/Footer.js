import React, { Component } from 'react';
import './Footer.css';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              whichForm:""
        };

      }

      
    render() {
        return (
            <footer>
                <div className="footerWrapper">
                    <div className="grid">
                        <div className="mrattm">
                            <h2>Know More about Our team</h2>
                            <ul>
                                <li>
                                    <a target="_blank" href="http://mtest.hotcourses.com/hc-cont/html/presentation/2018/html_team.html">HTML Team </a>
                                </li>
                                <li>
                                    <a target="_blank"  href="http://mtest.hotcourses.com/hc-cont/html/presentation/2018/experiment/demos.html">White Paper </a>
                                </li>
                                <li>
                                    <a  target="_blank" href="http://mtest.hotcourses.com/hc-cont/html/presentation/release_process/hc_release.html">Release  Cycle </a>
                                </li>
                                <li>
                                    <a target="_blank"  href="http://mtest.hotcourses.com/hc-cont/html/presentation/2018/resourse-template/html-resources.html ">HTML Resource </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>   
            </footer>   
        );
    }
}

export default Footer;
