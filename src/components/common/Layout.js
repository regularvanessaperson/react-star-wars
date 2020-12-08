import React from 'react'


  const Layout = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <a className="brand-logo center">STARWARS STARSHIPS</a>
                </div>
            </nav>
            <div>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;