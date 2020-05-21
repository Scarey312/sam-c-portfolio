import React, {Component} from 'react'
import Navigation from './Navigation.js'
import Splash from './Splash.js'
import projects from './Projects.json'
import './App.css'
import { BrowserRouter,HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Home.js'
import ProjectPage from './ProjectPage'
class App extends Component {

  render(){    
      return (

          <HashRouter>
          <div style={{display:"flex",flexDirection:"column",backgroundImage:`url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=en-US)`}}>
            <Navigation></Navigation>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/projects/:projName" component={ProjectPage}/>
            </Switch>
          </div>
          </HashRouter>
         
        
      
);
  }

}

export default App;
