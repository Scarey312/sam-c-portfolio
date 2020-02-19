import Jumbotron from 'react-bootstrap/Jumbotron'
import React from 'react'
import { Container, Button, Carousel } from 'react-bootstrap/'
import ContactCard from './ContactCard.js'

class SplashDesktop extends React.Component{
    render(){
    return(
        <Container style={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"}}>
            <div style={{textAlign:"center"}}   >
                <h1 className="display-4" style={{fontWeight:"700", color:"white"}}>Fullstack.</h1>
                <h1 className="display-4" style={{fontWeight:"700"}}>Sam Carey.</h1>
                <p className="lead" style={{fontWeight:"700"}}>
                    I'm a junior Software Engineer that enjoys building interesting things.
                </p>
            </div>
            <Carousel style={{height:"100%", width:"100%"}}>
                    <Carousel.Item>
                        <br></br>
                        <ContactCard></ContactCard>
                        <br></br>
                    </Carousel.Item>
                     <Carousel.Item>
                        <br></br>
                        <ContactCard></ContactCard>
                        <br></br>
                    </Carousel.Item>
                    <Carousel.Item>
                        <br></br>
                        <ContactCard></ContactCard>
                        <br></br>
                    </Carousel.Item>
                </Carousel>
                </Container>
        
        
    );
    }
}

export default SplashDesktop;