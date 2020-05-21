import React from 'react'
import { Container, Card, Button, Carousel} from 'react-bootstrap/'
import {Media} from 'react-breakpoints'
import {NavLink, Link} from 'react-router-dom'
import ProjectPage from './ProjectPage.js'
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
    return(
      <div style={{flex:"1 1 33.33333333%", textAlign:"center"}}>
        <Card style={{width:"20rem", height:"25rem",textAlign:"center",margin:"5%"}}>
          <Card.Header>{card.flag}</Card.Header>
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>{card.subtitle}</Card.Text>
            <ProjectTags tags={card.tags}/>

          </Card.Body>
          <Card.Footer>
            <NavLink to={{
              pathname: `projects/${card.name}`
            }}>
              <Button variant="outline-dark">View</Button>
            </NavLink>
          </Card.Footer>
        </Card>
      </div>
  
    )
  }

  )
  return(
    <div>
    <Container>
      <h1 className="display-4" style={{fontWeight:"700", textAlign:"center"}}>My work</h1>
    </Container>
    <Container style={{textAlign:"center",display:"flex",flexWrap:"wrap",flexDirection:"row"}}>     
    {cards}
  </Container>  
    </div>
    
  )
} 
const ProjectItemMobile = (props) =>{
  const cards = props.projectData.map((card) =>{
    return(
      <div style={{flex:"1 100%", textAlign:"center"}}>
        <Card style={{ height:"25rem",textAlign:"center",margin:"5%"}}>
          <Card.Header>{card.flag}</Card.Header>
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>{card.subtitle}</Card.Text>

            <ProjectTags tags={card.tags}/>
          </Card.Body>
          <Card.Footer><Button variant="dark">   <NavLink to={{
              pathname: `projects/${card.name}`
            }}>
              <Button variant="outline-dark">View</Button>
            </NavLink></Button>
</Card.Footer>
          
        </Card>
      </div>
  
    )
  }

  )
  return(
    <div>
    <Container>
      <h1 className="display-4" style={{fontWeight:"700", textAlign:"center"}}>My work</h1>
    </Container>
    <Container style={{textAlign:"center",display:"flex",flexWrap:"wrap",flexDirection:"row"}}>     
    {cards}
  </Container>  
    </div>
    
  )
}
const Project = (props) =>{
  const { projectData } = props;
    return(

      <Media>
            
        {({ breakpoints, currentBreakpoint }) =>
            breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
              <ProjectItem projectData = {projectData}></ProjectItem>

            ) : (
              <ProjectItemMobile projectData = {projectData}></ProjectItemMobile>


            )
        }
      </Media>

       
    );
}

export default Project;