import React, { Component } from 'react'
import Turtule from '../imgs/thinking_turtle.png'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <div className="header_outline">
        <header>
            <img className="tut_img" src={Turtule} alt="thinking turtule" />
            <h1 className="banner_name">Learne3</h1>
            <nav>
                <ul className="project_links">
                    <li><a>Programs</a></li>
                    <li><a>Get Help</a></li>
                    <li><a>Get More Involved</a></li>
                    <li><a>About</a></li>
                    <li><a>News</a></li>
                    <li><a>Events</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Donate</a></li>
                </ul>
            </nav>
        </header>
      </div>
    )
  }
}


