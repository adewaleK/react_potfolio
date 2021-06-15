import React from 'react';
import './Header.css'

function Header() {
    return (
        <div>
            <div className="nav">
              <div className="nav-items">
                <h1>DevKamil.</h1>
                <div className="hamburger">
                    <span className="first-bar"></span>
                    <span className="second-bar"></span>
                    <span className="third-bar"></span>
                </div> 
              </div>
            </div>
        </div>
    )
}

export default Header
