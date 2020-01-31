import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/landing.scss';


class Landing extends Component {
    render() {
      return (
        <div className="landing">
            <div className="title__container">
                <h1 className="title__name">I'm Laura Carril.<br /> I'm a frontend developer.</h1>
            </div>
            <div className="button">
                <Link className="button__link" to="/MainPage">View my work 
                <i className="fas fa-arrow-right"></i></Link>
            </div>
        </div> 
      )
    }
}

export default Landing;
