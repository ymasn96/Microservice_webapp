import React from 'react'
import './SearchBox.css'

export const SearchBox = (props) => {

  const { handleInputText, searchterm } = props

  return (
    <div className='container'>
        <input 
          onChange={handleInputText} 
          searchterm={searchterm}
          className='search' 
          type="text" 
          placeholder='Search...' />
    </div>
  )
}
