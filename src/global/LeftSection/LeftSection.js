import React, { Component } from 'react';

class LeftSection extends React.Component {

    render() {
        return (
            <aside>
                <div class="leftSections">
                <div class="section1">
                    <ul>
                        <li class="secHeading">
                            Navigation
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
                <div class="section1">
                    <ul>
                        <li class="secHeading">
                            Components
                        </li>
                        <li class="secLinks">
                            <span><i class="fa fa-tachometer" aria-hidden="true"></i></span>
                            <span>Layouts</span>
                        </li>
                        <li class="secLinks">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>UI ELements</span>
                        
                        </li>
                        <li class="secLinks">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Pages</span>
                        
                        </li>
                        <li class="secLinks">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Forms</span>
                        
                        </li>
                        <li class="secLinks">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>Tables</span>
                        
                        </li>
                    </ul>
                </div>
                </div>
                
                
            </aside>
        );
    }
}

export default LeftSection;