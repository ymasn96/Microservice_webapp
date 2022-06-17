import React from 'react'
import JSONDATA from '../../MOCK_DATA.json'
import './SearchBox.css'

export const SearchBox = (props) => {

  const { handleInputText, searchTerm } = props

  return (
    <div className='container'>
        <input 
          onChange={handleInputText} 
          searchValue={searchTerm}
          className='search' 
          type="text" 
          placeholder='Search...' />
        {JSONDATA.map((val, key) => {
          return (
              <p>{val.first_name}</p>
          )
        })}
    </div>
  )
}
