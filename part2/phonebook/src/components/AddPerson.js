import React from 'react'


const AddPerson = ({addPerson, newName, newNumber, handleNameChange, handleNumberChange}) => {


    
  
  
  
    return( 
    
        <form onSubmit={addPerson}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameChange} placeholder="Enter name here..." />
        </div>
        <div>
          number: <input type="number" value={newNumber} onChange={handleNumberChange} placeholder="Enter number here..." />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )



}


export default AddPerson