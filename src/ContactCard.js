
import React from 'react'
import {Container, Card, Button} from 'react-bootstrap/'

function ContactCard(){

    return(
            
            <Card bg="light" style={{margin:"5em", textAlign:"center"}}>
                        <Card.Body>
                        <Card.Title><img src={require ("./samProf.jpg")} alt="" className="myimg"/></Card.Title>
                        <Card.Title>Interested in working together?</Card.Title>
                        <Card.Text>
                            Let's get to know eachother. You go first.
                         </Card.Text>
                         
                        <Button variant="dark">Contact</Button>
                        </Card.Body>
                        </Card>

    )
}

export default ContactCard;
 