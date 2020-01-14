import React from 'react'
import Header from './Header'
import Part from './Part'


const Course = ({course}) => {

    const sum = () => course.parts.reduce((total, part) => {
        return total + part.exercises
    }, 0)

    const parts = () => course.parts.map(part =>

        <Part name={part.name} exercises={part.exercises}></Part>
        )

    return (
        <div>
            <Header text={course.name}></Header>
            {parts()}
            {sum()}
       </div>
        
    )
}

export default Course