import React from 'react'
import { Container, Card, Button} from 'react-bootstrap/'
import ContactCard from './ContactCard'

class Work extends React.Component{
    render(){
    return(
       <Container style={{marginTop:"10vh",textAlign:"left",width:"100vw", height:"100vh"}}>
            <h1 className="display-4" style={{fontWeight:"700"}}>Resume</h1>
            <br></br>
<Card className="text-left">
  <Card.Header>Professional Experience</Card.Header>
  <Card.Body>
    <Card.Title>UT Health Science Center</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Card.Title>UT Health Science Center</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
      </Card.Body>
</Card>  
<br></br>
<Card className="text-left">
  <Card.Header>Professional Experience</Card.Header>
  <Card.Body>
    <Card.Title>UT Health Science Center</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Card.Title>UT Health Science Center</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
      </Card.Body>
</Card>   
   </Container>
    );
    }
}

export default Work;