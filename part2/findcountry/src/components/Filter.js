import React from 'react'



const Filter = ({filterHandler}) => {


    return (
    <div>
       Search for country: <input onChange={filterHandler} /> 
    </div>
    )
}

export default Filter