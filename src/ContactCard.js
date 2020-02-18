
import React from 'react'
import {Container, Card, Button} from 'react-bootstrap/'

function ContactCard(){

    return(
            
            <Card style={{width: '70%', height:"10%", textAlign:"center"}}>
                        <Card.Body>
                        <Card.Title><img src={require ("./samProf.jpg")} alt="" className="myimg"/></Card.Title>
                        <br></br>
                        <Card.Title>Interested in working together?</Card.Title>
                        <Card.Text>
                        If you're looking for a candidate like me, consider contacting me to establish a base. 
                        <br></br>
                        <br></br>
                        <Button variant="dark">Contact</Button>
                        

                         </Card.Text>
                        </Card.Body>
                        </Card>

    )
}

export default ContactCard;
 