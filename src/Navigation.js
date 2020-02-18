import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Container} from 'react-bootstrap' 
function Navigation(){
    return(
<Navbar expand="lg" variant="light" sticky="top">
           
            <Container>
            <Navbar.Brand href="#home">
            Sam Carey
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
                <Nav className="ml-auto">
                    <Nav.Link href="#">Blog</Nav.Link>
                    <Nav.Link href="#home">About Me</Nav.Link>
                    <Nav.Link href="#link">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>
        
    )
}

export default Navigation;