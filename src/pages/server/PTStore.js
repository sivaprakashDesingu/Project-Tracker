import React, { Component } from 'react';
import { extendObservable } from 'mobx';
import { observer }  from 'mobx-react';


class MyStorage{
  constructor(){
    extendObservable(this,{
      empDetails:{
        id:'yes',
        name:'siva',
      },
      pages:{
        activePage:"DashBoard",
      },  
      EmployeeList:[],
      backendServer:'http://localhost:8000/',    
    })
  }
}
var PTStore = new MyStorage();
export default PTStore;