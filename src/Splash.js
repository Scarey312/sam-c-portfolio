import Jumbotron from 'react-bootstrap/Jumbotron'
    import React from 'react'
    import { Container, Button, Carousel } from 'react-bootstrap/'
    import ContactCard from './ContactCard.js'
    import {Media} from 'react-breakpoints'
    import SplashDesktop from './SplashDesktop.js'
    import SplashMobile from './SplashMobile'
    import Navigation from './Navigation'

const Splash = (props) =>{
    const { projects } = props;
    var display = "";
    return(
        <Media>
            
            {({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                    <SplashDesktop></SplashDesktop>
                ) : (
                    <SplashMobile></SplashMobile>
                )
            }
        </Media>
    );
}

export default Splash;