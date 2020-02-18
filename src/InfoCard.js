
import React from 'react'
import {Container, Card, Button} from 'react-bootstrap/'

class InfoCard extends React.Component{
    render(){
    
        return(
                <Card bg="dark" style={{height:"100%"}}>
                <Card.Body>
                <Card.Text>
        Placeholder Placeholder
                    <br></br>
                    <Button variant="primary">Contact</Button>
                </Card.Text>
                </Card.Body>
                </Card>
        
            
        );
    }
        
}

export default InfoCard;