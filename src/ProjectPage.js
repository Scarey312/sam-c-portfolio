import React, {Component} from 'react';
import {Carousel, Container} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import projects from './Projects.json'
class ProjectPage extends Component{
    constructor(props){
        super(props);
    }

componentDidMount(){
    window.scrollTo(0, 0);

}
    render(){
        const {match} = this.props
        console.log(match.params.projName)
        console.log(projects.length)
        var i;
        var currentProj, about, problem,solution = ""
        for (i=0; i<projects.length; i++){
            if(projects[i].name  == match.params.projName){
                currentProj = projects[i].name;
                about = projects[i].background;
                problem = projects[i].problem;
                solution = projects[i].solution;
            }
        }
        console.log(currentProj)
        return (
            <div>
                <div className ="myStyle2" style={{height:"20vh", display:"flex",flex:"0"}}>
                    <Container  style={{margin:"auto"}}>
                    <h1 className="display-4" style={{fontWeight:"700", textAlign:"center"}}>{currentProj}</h1>
                    
                    </Container>
                </div>
                
            <div style={{backgroundColor:"white", height:"50rem", display:"flex", flex:"1", flexDirection:"column"}}>
   
                <Container style={{margin:"auto"}}> 
                <h3>Background</h3>
                <p>{about}</p>
                <br></br>
                <h3>The Problem</h3>
                <p>{problem}</p>
                <br></br>
                </Container>
               
                
                

            </div>
            
            <div style={{display:"flex", flexDirection:"row"}}>
                <div className="left-half2">
                <h3>The solution</h3>
                <p>{solution}</p>
                </div> 
                <div className = "right-half2">
                    
                </div>   
            </div>

            </div>
           
         );
    }
    
}
 
export default ProjectPage;