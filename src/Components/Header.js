import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import './Header.css';
class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {/*<li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>*/}
         </ul>

      </nav>

      <div className="row banner" >
         <div className="banner-text" >
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3 id="typewriter_h3">
               I'm a Sydney based &ensp; <Typewriter  id="shit" options={{ strings:   ["Site Reliability Engineer", "Software Engineer" , "code monkey", "terminal smasher", "Arch elitist", "computer wizard", "power lifter", "hip hop enthusiast", "football fan", "professional googler", "Seinfield lover"], autoStart: true,loop: true,}}/>  
               {description}
            </h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
