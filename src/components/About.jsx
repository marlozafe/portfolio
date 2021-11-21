import React from 'react'
import { Card, Container } from 'react-bootstrap'
import HtmlLogo from '../img/html.png'
import CssLogo from '../img/css.png'
import jsLogo from '../img/js.png'
import phpLogo from '../img/php.png'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
    return (
        <div id="about" className="bg-light section">
            <Container className="text-center pb-5 pt-4">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <h2 className="fw-bolder shadow text-danger d-inline-block py-3 px-5 rounded-pill">About me</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <h3 className="mt-5 fw-bold">I am Marlo A. Zafe</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <p className="text-wrap">Hello, I am a Web developer from the country of the Philippines. It has almost been 3 years since I started
                        my journey to become a developer. I am really looking forward to do amazing projects and to work with such amazing people like you.
                    </p>
                </ScrollAnimation>
                <div className="text-center mt-5">
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <h4>SKILLS</h4>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className="row justify-content-center mt-3 gy-3">
                            <div className="col-sm-5">
                                <div className="row gx-0 gy-3">
                                    <div className="col">
                                        <img src={HtmlLogo} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col">
                                        <img src={CssLogo} className="img-fluid" alt="" />

                                    </div>
                                    <div className="col">
                                        <img src={jsLogo} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col">
                                        <img src={phpLogo} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

            </Container>
        </div>
    )
}

export default About
