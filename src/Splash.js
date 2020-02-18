import Jumbotron from 'react-bootstrap/Jumbotron'
import React from 'react'
import { Container, Button, Carousel } from 'react-bootstrap/'
import ContactCard from './ContactCard.js'
import {Media} from 'react-breakpoints'
import SplashDesktop from './SplashDesktop.js'
import SplashMobile from './SplashMobile'


const Splash = (props) =>{
    const { projects } = props;
    return(
        <Media>
            {({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                    <SplashDesktop projects = {projects}></SplashDesktop>
                ) : (
                    <SplashMobile projects={projects}></SplashMobile>
                )
            }
        </Media>
    );
}

export default Splash;