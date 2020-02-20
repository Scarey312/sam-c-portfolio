import React from 'react'
import { Container, Carousel, Card } from 'react-bootstrap/'
import ContactCard from './ContactCard.js'

const SplashDesktop = (props) =>{
    return(
        <div >
        <Container style={{height:"100vh",display:"flex", flexDirection:"row"}}>
            <div className="left-half" style={{textAlign:"left"}} >
                <Card style={{borderRadius:"15px", textAlign:"center",backgroundColor:"rgba(255, 255, 255, 0.24)", backdropFilter:"blur(8px)"}}>
                <h1 className="display-2" style={{color:"white",fontWeight:"700"}}>Fullstack.</h1>
                <h1 className="display-2" style={{fontWeight:"700"}}>Sam Carey.</h1>
                <p className="lead" style={{fontWeight:"700"}}>
                    I'm a junior Software Engineer that enjoys building interesting things.
                </p>
                </Card>
                
            </div>
            <div className="right-half">
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
            </div>
                </Container>

            <Container>
                    
            </Container>
            </div>
            
        
    );
    
}

export default SplashDesktop;