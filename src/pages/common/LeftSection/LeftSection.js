import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Home from '../../Home/Home';
import PTStore from '../../server/PTStore'
class LeftSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //paramValue: this.props.location.state,
        };
      }


    whichPageDisplaying(parentId,whichPage,index){
        console.log(whichPage);
        if(whichPage == 'DashPage'){
            PTStore.pages.activePage = 'DashBoard';
        }else if(whichPage == 'EmployeePage'){
            PTStore.pages.activePage = 'EmployeePage';
        }

        var menuParentLength= document.querySelectorAll("#"+parentId+" li").length;
        var menus = document.querySelectorAll("#"+parentId+" li");
        for(var i= 0;i<menuParentLength;i++){
            menus[i].classList.remove("active");
            if(i==index){
                menus[i].classList.add("active");
            }
        }
    }
  
    render() {
        return (
            <aside>
                <div className="leftSections">
                    
                    <div className={this.props.Designation.toUpperCase()=='Senior Manager'.toUpperCase() ? 'section1 lead'  : 'section1 emp'}>
                        <ul id="LeftMenuCont">
                            <li  onClick={this.whichPageDisplaying.bind(this,'LeftMenuCont','DashPage',0)} className="dashPage secLinks active">
                                <span><i className="fa fa-tachometer" aria-hidden="true"></i></span>
                                <span>Dashboard</span>
                            </li>
                            
                            {this.props.Designation.toUpperCase()=='Senior Manager'.toUpperCase() ? 
                             <li onClick={this.whichPageDisplaying.bind(this,'LeftMenuCont','EmployeePage',1)}  className="subordinategPage secLinks">
                             <span><i className="fa fa fa-users" aria-hidden="true"></i></span>
                             <span>Sub ordinates</span>
                            </li>
                            : null }

                            <li  onClick={this.whichPageDisplaying.bind(this,'LeftMenuCont','ReportPage',2)} className="reportPage secLinks">
                                <span><i className="fa fa-file-text-o" aria-hidden="true"></i></span>
                                <span>Report</span>
                            </li>
                            <li  onClick={this.whichPageDisplaying.bind(this,'LeftMenuCont','SettingPage',3)} className="settingPage secLinks">
                                <span><i className="fa fa-cog" aria-hidden="true"></i></span>
                                <span>Settings</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}

export default observer(LeftSection);