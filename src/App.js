import React from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './scss/App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const App = () => {
    return (
        <div>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <Header />
                <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                    <Home />
                    <About />
                    <Projects />
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default App;