import React from 'react'
import { Container, Carousel } from 'react-bootstrap/'
import ContactCard from './ContactCard.js'

const SplashDesktop = (props) =>{
    return(
        <div >
        <Container style={{width:"100vw",height:"70vh",display:"flex", flexDirection:"row"}}>
            <div className="left-half" style={{textAlign:"left"}} >
                <h1 className="display-2" style={{color:"white",fontWeight:"700"}}>Fullstack.</h1>
                <h1 className="display-2" style={{fontWeight:"700"}}>Sam Carey.</h1>
                <p className="lead" style={{fontWeight:"700"}}>
                    I'm a junior Software Engineer that enjoys building interesting things.
                </p>
            </div>
            <div className="right-half">
                <Carousel >
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