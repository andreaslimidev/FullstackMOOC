import React from 'react'
import Country from './Country'


const ShowCountries = ({countries, filter, showHandler}) => {

    const filterData = (country, filter) => {

        if(filter === '' || country.name.includes(filter)) return true 
       
        return false
    }

    const chosenCountries = countries.filter(country => filterData(country, filter))

    if(chosenCountries.length > 10) {
        return (
            <div>
                <p> Please choose a more spesific filter...</p>
            </div>
        )
    }

    if(chosenCountries.length > 1) {

     return chosenCountries.map(country => 
        <Country name={country.name} showHandler={showHandler}></Country>
    )
    }

    else if(chosenCountries.length === 1) {
        
       const chosenCountry = chosenCountries[0]
        console.log("HELLOOOO" + chosenCountry)
        
        const dimensions = {
            width: '250px',
            height: 'auto'
        }

        return (
            
            <div>
            <h2>{chosenCountry.name}</h2>
            <p>Capital: {chosenCountry.capital}</p>
            <p>Region: {chosenCountry.region}</p>
            <p>Native name: {chosenCountry.nativeName}</p>
            <img src={chosenCountry.flag} style={dimensions}></img>
            </div>
        )
    }

    return (
        <div>

        </div>
    )

}


export default ShowCountries