import React from 'react'

const Person = (props) => {

    return (

        <div>
            <p>{props.name}: {props.number}</p>
            <button onClick={props.deleteHandler}>Delete</button>
           
        </div>
    )
}

export default Person 


