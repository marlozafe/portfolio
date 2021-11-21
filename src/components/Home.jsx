import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
import CodeDev from '../img/Code Development _Isometric.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import Typewriter from 'typewriter-effect'

const Home = () => {
    const getIcon = icon => {
        return <FontAwesomeIcon icon={icon} />
    }

    return (
        <div id="home" className="bg-dark text-white section">
            <Container className="py-5">
                <Row className="align-items-center gx-5 gy-5">
                    <div className="text-center col-sm">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <h3>Hello, I'm <span className="text-danger">Marlo</span></h3>
                            <h5>
                                <Typewriter
                                    options={{
                                        strings: ['Web Developer', 'ReactJS Developer','Java Developer',' Android Developer', 'PHP Developer'],
                                        autoStart: true,
                                        pauseFor:"2000ms",
                                        loop: true,
                                        typeString:`<i>{getIcon(faGlobe)}</i>`
                                    }}
                                >
                                </Typewriter>
                            </h5>
                            <p className="mt-5" id="typewriter">Have a project on mind? Let's talk about it <i>{getIcon(faCoffee)}</i> </p>

                            <div className="mb-3">
                                <a href="#projects" className="btn btn-outline-light mx-2">My Works</a>
                                <Button variant="danger" id="msg-btn">Message <i>{getIcon(faPhone)}</i> </Button>
                            </div>

                        </ScrollAnimation>

                    </div>
                    <div className="col-sm">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <img src={CodeDev} className="img-fluid" alt="" />
                        </ScrollAnimation>
                    </div>
                </Row>
            </Container>

            <div className="custom-shape-divider-bottom-1634208358">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>

    )
}



export default Home
