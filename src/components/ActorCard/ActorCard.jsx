import React from 'react'
import "./ActorCard.css"


export const ActorCard = (props) => {

  const { fname, lname, films } = props


  return (
    <div className='actor_card'>
        <h2 className='actor_text'>{fname} {lname}</h2>
        {films.map((film) =>  (
          <p className='film_title'>{film.title}</p>
    ))}
    </div>
  )
}

