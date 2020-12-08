import React from 'react'
import {
    Route,
    Link
  } from 'react-router-dom';


  const Layout = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <a href="#" className="brand-logo center">STARWARS STARSHIPS</a>
                </div>
            </nav>
            <div>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;