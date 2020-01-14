import React from 'react'


const Country = ({name, showHandler}) => {

    return (
        <div>
            <p>{name} <button value={name} onClick={showHandler}>show</button> </p>
        </div>
    )
}

export default Country