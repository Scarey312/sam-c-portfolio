import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Nav, Container} from 'react-bootstrap' 
import {NavLink} from 'react-router-dom'
function Navigation(){
    return(
<Navbar expand="lg" variant="light" sticky="top">
           
            <Container>
            <NavLink to={{
              pathname: "/"
            }}> <Navbar.Brand>
            Sam Carey
            </Navbar.Brand></NavLink>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
                <Nav className="ml-auto">
                    <Nav.Link href="#link">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>
        
    )
}

export default Navigation;