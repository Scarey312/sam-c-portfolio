import Jumbotron from 'react-bootstrap/Jumbotron'
import React from 'react'
import { Container, Card, Carousel } from 'react-bootstrap/'
import ContactCard from './ContactCard.js'

class SplashMobile extends React.Component{
    render(){

    return(

        <div style={{display:"flex",flexDirection:"column", margin:'none', backgroundImage:`url(https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=en-US)`}}>
                <div className="myStyle">
                    <div style={{margin:"5%"}}>
                        <h1 className="display-4" style={{fontWeight:"700", color:"white"}}>Fullstack.</h1>
                        <h1 className="display-4" style={{fontWeight:"700"}}>Sam Carey.</h1>
                        <p className="lead" style={{fontWeight:"1000"}}>
                            I'm a junior Software Engineer that enjoys building interesting things.
                        </p>
                    </div>
                    
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
                </div>
        
        
    );
    }
}

export default SplashMobile;