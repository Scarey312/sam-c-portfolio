
import React from 'react'
import {Container, Card, Button} from 'react-bootstrap/'

function ContactCard(){

    return(
            
            <Card style={{borderRadius:"15px",margin:"3em", textAlign:"center",backgroundColor:"rgba(255, 255, 255, 0.24)", backdropFilter:"blur(10px)"}}>
                        <Card.Body>
                        <Card.Title><img src={require ("./samProf.jpg")} alt="" className="myimg"/></Card.Title>
                        <br></br>
                        <Card.Title>Interested in working together?</Card.Title>
                        <Card.Text>
update                        <br></br>
                        <br></br>
                        <Button variant="dark">Contact</Button>
                        

                         </Card.Text>
                        </Card.Body>
                        </Card>

    )
}

export default ContactCard;
 