import React, {Component} from 'react'
import Splash from './Splash.js'
import Project from './Project.js'
import './App.css'
import projects from './Projects.json'
class home extends Component {

  render(){
    
      return (
          
          <div>
            
          <Splash/>
          
          <div style={{textAlign:"center",backgroundColor:"#fefefe"}}>
            <br></br>
            <Project projectData = {projects}/>  
          </div>
          </div>
         
        
      
);
  }

}

export default home;
