import React from 'react'
import { Container, Card, Button, Carousel} from 'react-bootstrap/'
import projects from './Projects.json'

const ProjectTags = (props) =>{
  const projtags = props.tags.map((thistag)=>{
   return(
  <div style={{borderRadius:"20px",paddingLeft:"10px",paddingRight:"10px",margin:"1%", backgroundColor:"lightgrey"}}>
    {thistag.tag}  
    </div>
   )
   
  }) 
  return(
    <Container style={{display:"flex",flexWrap:"wrap", flexDirection:"row"}}>
      {projtags}
    </Container>
  )
}

const ProjectItem = (props) =>{
  const cards = props.projectData.map((card) =>{
    var headerStyle ={backgroundColor:"lightgrey"}
    
    if(card.flag == "⭐ Featured"){
        headerStyle ={backgroundColor:"#B4A8FF"}
      }
    if(card.flag == "⚠ Experimental"){
        headerStyle ={backgroundColor:"lightyellow"}
      }
    if(card.flag == "🎨 Design"){
        headerStyle ={backgroundColor:"lightblue"}
      }
    return(
      <div style={{flex:"1 1 33%"}}>
        <Card style={{borderRadius:"15px", textAlign:"center",margin:"5%"}}>
         <br></br>
         <Card.Title>{card.flag}</Card.Title>
         <Card.Img style={{borderRadius:"15px"}} src={require(`${card.img}`)} />     
    </Card>
      </div>
  
    )
  }

  )
  return(
    <div>
    <Container>
      <h1 style={{fontWeight:"700"}}>My work</h1>
    </Container>
    <Container style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>     
    {cards}
  </Container>  
    </div>
    
  )
} 

const Project = (props) =>{
  const { projectData } = props;
    return(
      <ProjectItem projectData = {projectData}></ProjectItem>

       
    );
}

export default Project;