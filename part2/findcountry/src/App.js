import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios'; 
import './App.css';
import Filter from './components/Filter'
import ShowCountries from './components/ShowCountries';


function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')



  const hook = () => {
    
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log("promise fulfilled")
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])


  // Event handlers 

  const handleFilterChange = (event) => {
    console.log(event.target.value)  
    setFilter(event.target.value)
  }

  const handleShowBtn = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="App">
      <Filter filterHandler={handleFilterChange}></Filter>
      <h2> Countries </h2>
      <ShowCountries countries={countries} showHandler={handleShowBtn} filter={filter}></ShowCountries>
 
    </div>
  )
}

export default App;
