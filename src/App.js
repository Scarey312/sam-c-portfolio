import React, {Component} from 'react'
import Navigation from './Navigation.js'
import Splash from './Splash.js'
import Project from './Project.js'
import './App.css'
import Work from './Work';
class App extends Component {

  render(){
    const projects = [
      {
        name: 'AmitTask',
        flag: '⭐ Featured',
        subtitle: 'Medical Team-Tasking Mobile application designed for the UT Health Science Center',
        img: "./amitask.png", 
        tags: [
          {tag: "Swift"},
          {tag:"Mobile App"},
          {tag: "UI/UX"},
          {tag:"Requirements Gathering"}, 
          {tag: "Technical Documentation"},
          {tag:"Team Effort"},
          {tag:"Leadership"}
        ]
      },
      {
        name: 'This Web App',
        flag: '⭐ Featured',
        subtitle: 'Getting my feet wet with Reactjs and modern web development.',
        img: "./portfolio.png", 
        tags: [
          {tag: "React"},
          {tag:"JavaScript"},
          {tag: "Bootstrap"},
          {tag: "HTML"},
          {tag: "CSS"},
          {tag: "Responsive Web Design"},
          {tag: "UI/UX"},
        ]
      },
      {
        name: 'Dog Daze',
        flag: '⚠ Experimental',
        subtitle: 'A rather playable, completable, zany little game about a mischevious pup.',
        img: "./dogdaze.png", 

        tags: [
          {tag: "C#"},
          {tag:"Unity"},
          {tag: "Game Design"},
          {tag: "UI/UX"},
          {tag: "Team Effort"},
        ]
      },
      {
        name: 'Modulo Watchface',
        flag: '🎨 Design',
        subtitle: 'xcSCCsacSC',
        img: "./modulo.png", 
        tags: [
          {tag: "Wearables"},
          {tag:"Pebble"},
          {tag: "Mockup"},
        ]
      },
     
      {
        name: 'Medsys',
        flag: '📖 Academic',
        subtitle: 'Getting my feet wet with Reactjs and modern web development.',
        img: "./medsys.png", 
        tags: [
          {tag: "React"},
          {tag:"JavaScript"},
          {tag: "Bootstrap"},
          {tag: "HTML"},
          {tag: "CSS"},
          {tag: "Responsive Web Design"},
          {tag: "UI/UX"},
        ]
      },
      {
        name: 'Cramr',
        flag: '📖 Academic',
        subtitle: 'A Game Development Course final project. A rather playable, completable, zany little game about a mischevious pup.',
        img: "./cramr.png", 
        tags: [
          {tag: "React"},
          {tag:"JavaScript"},
          {tag: "Bootstrap"},
          {tag: "HTML"},
          {tag: "CSS"},
          {tag: "Responsive Web Design"},
          {tag: "UI/UX"},
        ]
      },
      
    ]
    
      return (
        <div style={{backgroundImage:"linear-gradient(-90deg,#8bc5ff,#c58bff,#ff8b8b 100%)"}}>
          <Navigation/>
          <Splash/>
          <div style={{backgroundColor:"#fefefe"}}>
            <br></br>
            <Project projectData = {projects}/>  
          </div>
        </div>
        
        
      
);
  }

}

export default App;
