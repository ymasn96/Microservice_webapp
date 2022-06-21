import React from 'react'

export const ActorCard = (props) => {

    const { id, fname, lname } = props

  return (
    <div className='actor_card'>
        <p>{fname}</p>
        <p>{lname}</p>
    </div>
  )
}
