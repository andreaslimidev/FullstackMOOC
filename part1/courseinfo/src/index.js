import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
        <Header course={course} />
       <Content content={course} />
        <Total content={course} />
    </div>
  )
}

const Total = (props) => {

    let total = 0; 
    props.content.parts.forEach(value => total += value.exercises) 

    return (
        <>
        <p> Total exercises: {total} </p>
        </>
    )
}

const Content = (props) => {
     
    return (
        <div>
            <Part part={props.content.parts[0].name} exercises={props.content.parts[0].exercises} />
            <Part part={props.content.parts[1].name} exercises={props.content.parts[1].exercises} />
            <Part part={props.content.parts[2].name} exercises={props.content.parts[2].exercises} />
        </div>
    )
}

const Part = (props) => {

    return (  
    <div>
    <p> {props.part} {props.exercises} </p>
    </div>
    )
}

const Header = (props) => {
    
    return (
    <div>
        <p> Course: {props.course.name} </p>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))