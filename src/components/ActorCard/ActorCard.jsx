import React from 'react'
import "./ActorCard.css"


export const ActorCard = (props) => {

    const { fname, lname } = props

  return (
    <div className='actor_card'>
        <p>{fname}</p>
        <p>{lname}</p>
    </div>
  )
}
