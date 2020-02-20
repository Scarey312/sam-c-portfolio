import Jumbotron from 'react-bootstrap/Jumbotron'
import React from 'react'
import { Container, Card, Carousel } from 'react-bootstrap/'
import ContactCard from './ContactCard.js'

class SplashDesktop extends React.Component{
    render(){
    return(
        <Container style={{display:"flex",flexDirection:"column",}}>
            <div style={{margin:"auto", flex:"1",textAlign:"center",backgroundColor:"rgba(255, 255, 255, 0.24)", width:"100%",backdropFilter:"blur(10px)"}}>

                <h1 className="display-4" style={{fontWeight:"700", color:"white"}}>Fullstack.</h1>
                <h1 className="display-4" style={{fontWeight:"700"}}>Sam Carey.</h1>
                <p className="lead" style={{fontWeight:"700"}}>
                    I'm a junior Software Engineer that enjoys building interesting things.
                </p>
                </div>
            <Carousel prevIcon={<span aria-hidden="false"/>} nextIcon={<span aria-hidden="false"/>} indicators={false}>
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