import React, {useEffect, useState} from 'react'
import {
    Link
} from 'react-router-dom';
import Loading from './common/Loading'


const StarshipPage = (state) => {
    const [loading, setLoading] = useState(true)

    const starship = () => {
            const ship = state.location.state
            console.log({ship})
            return (
                <div className="row">
                <div className="col s12 m6">
                  <div className="card teal darken-1">
                    <div className="card-content  white-text ">
                      <span className="card-title ">NAME: {ship.name}</span>
                      <ul>
                          <li key={ship.name}> MODEL: {ship.model}</li>
                          <li key={ship.name}> STARSHIP CLASS: {ship.starship_class}</li>
                      </ul>
                    </div>
                    <div className="card-action">
                      <Link to="/" key={ship.name} className="white-text flow-text truncate"> RETURN </Link>
                    </div>
                  </div>
                </div>
              </div>
            )  
   }




    return( <div>
         {starship()}
    </div>
)

}

export default StarshipPage;