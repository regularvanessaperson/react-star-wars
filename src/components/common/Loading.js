import React from 'react'
import { Switch } from 'react-router-dom'

const Spinner = () => {
    return (
        <div>
            <h3>Loading</h3>
        <div className="progress">
        <div className="indeterminate"></div>
    </div>
    </div>
    )
}

export default Spinner;