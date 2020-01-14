import React from 'react'

const Filter = ({setNewFilter, newFilter}) => {

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
      }

      return (
        <div>
        filter: <input type="text" value={newFilter} onChange={handleFilterChange} placeholder="Filter with keyword..." />
      </div>
      )

}

export default Filter