import React from 'react'
import buildSvg from '../img/Process building_Outline.svg'
import portfolioImg from '../img/portfolio.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'
const Projects = () => {
    return (
        <div id="projects" className="bg-light section">
            <div className="container text-center">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    <h3 className="fw-bolder shadow text-danger d-inline-block py-3 px-5 rounded-pill">My Works <FontAwesomeIcon icon={faBuilding} /></h3>
                </ScrollAnimation>
                <div className="row mt-md-5 row-cols-md-4 gy-2">
                <div className="col-sm">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <div className="card rounded-0">
                                <div className="card-body">
                                    <h3>Portfolio</h3>
                                    <img src={portfolioImg} className="img-fluid" alt="" />
                                    <br/>
                                    <p>Coming Soon...</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-sm">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <div className="card rounded-0">
                                <div className="card-body">
                                    <h3>Fezartia</h3>
                                    <img src={buildSvg} className="img-fluid" alt="" />
                                    <p>Coming Soon...</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-sm">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                            <div className="card rounded-0">
                                <div className="card-body">
                                    <h3>CAMS</h3>
                                    <img src={buildSvg} alt="" className="img-fluid" />
                                    <p>Coming Soon...</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-sm">
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <div className="card rounded-0">
                            <div className="card-body text-center">
                                <h3>E-commerce</h3>
                                <img src={buildSvg} alt="" className="img-fluid" />
                                <p>Coming Soon...</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
