import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import ShowPeople from './components/ShowPeople'
import axios from 'axios'
import personService from './services/persons'
import './index.css'

import { arrayExpression } from '@babel/types'

const baseUrl = "/api/persons/"
const App = () => {

  const [ persons, setPersons] = useState([
    { name: 'Andreas Limi',
      number: '94144149' 
  }
  ]) 
  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber] = useState('')

  const [ newFilter, setNewFilter ] = useState('')

  const [ newError, setError ] = useState('')

  const Http = new XMLHttpRequest()


  const hook = () => {
    
    axios
      .get(baseUrl)
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
      })
  }

  useEffect(hook, []);

  const deleteHandler = (id, name) => {
    if(window.confirm('Are you sure you want to delete ' + name + '?')) {
    personService
    .remove(id)
    .then(() => {
      personService
      .getAll()
      .then(people => {
        setPersons(people)
        setNewName('')
        setNewNumber('')
      }
      )})}
    }


  const handleNameChange = (event) => {

    console.log(event.target.value)
    setNewName(event.target.value)
  }


  const handleNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if(!checkName(newName)) {

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService
    .create(newPerson)
    .then(() => {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    })

    setError('Sucsessfully added ' + newName)
    setTimeout(resetError, 4000)
   
  }
  else {
    if(window.confirm(newName + ' is already added, replace number with a new one?')) {


      const newPerson = {
        name: newName,
        number: newNumber
      }

      const id = findPerson(newName).id
      personService
      .put(newPerson, id)
      .then(refresh())
     
    }
    
  }
  }

  const refresh = () => {
    console.log("TEST")
    personService
    .getAll()
    .then(people => {
      setPersons(people)
      setNewName('')
      setNewNumber('')
    }
    )
    .catch(() => console.log('error ocurred'))
  }


  const findPerson = (name) => {
    return persons.find(person => person.name === name)
  }

  const checkName = (name) => {

    const names = persons.map(person => person.name)
    return names.includes(name)
  }

  const ErrorMessage = ({message}) => {

    return (
      <h2 className='error'>{message}</h2>
    )
  }

  const resetError = () => setError(' ')


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter className='filter' setNewFilter={setNewFilter} newFilter={newFilter}></Filter>
      <ErrorMessage message={newError}></ErrorMessage>
      <h3>Add new</h3>
      <AddPerson  addPerson={addPerson} newName={newName} newNumber={newNumber} 
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}></AddPerson>
      <h2>Numbers</h2>
      <ShowPeople persons={persons} newFilter={newFilter} deleteHandler={deleteHandler}></ShowPeople>
    </div>
  )
}

export default App