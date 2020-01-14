import React from 'react'
import Person from './Person'

const ShowPeople = ({persons, newFilter, deleteHandler}) => {

    const people = () => {
    
        const filtered = persons.filter(person => filter(person.name, newFilter))
        
        console.log(filtered)
    
        return filtered.map(person => 
          <Person key={person.name} name={person.name} number={person.number} deleteHandler={() => deleteHandler(person.id, person.name)}></Person> )
      }
    
    
  
      const filter = (name, filter) => {
    
        if(filter === '' || name.includes(filter)) {
          return true 
        }
        return false 
      }

      return(
          <div> {people()} </div>
      )
}

export default ShowPeople