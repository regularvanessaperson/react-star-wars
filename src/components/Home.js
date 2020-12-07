import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/').then((res) => {
            console.log("show response:", res.data.results)
            setData(res.data.results)
        }).catch(error=>{
            console.log("error",error)
        })
    }, []);


    const starship =()=> {
        return data.map(ship=>(
            <div key={ship.name}>{ship.name}</div>  
          ))
    }
    
    return <div>
        <header>Starwars Starship</header>
        
        {starship()}
    </div>


}

export default Home;