import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Link
} from 'react-router-dom';


const StarshipList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/').then((res) => {
            console.log("show response:", res.data.results)
            setData(res.data.results)
        }).catch(error => {
            console.log("error", error)
        })
        debugger
    }, []);




    const starships = () => {
        return data.map(ship => (
            <div className="col s12 m3">
                <div className="card">
                        <div className="card-content teal">
                        <Link to={{pathname: "/starshipPage", state: ship}} key={ship.name} className="white-text flow-text truncate"> {ship.name} </Link>
                        </div>
                </div>
            </div>
        ))
    }

    return <div className="container">
        <div className="row">
            {starships()}
        </div>
    </div>


}

export default StarshipList;