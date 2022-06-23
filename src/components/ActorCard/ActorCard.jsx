import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ActorCard.css"


export const ActorCard = (props) => {

  const { fname, lname, films, handleClick, film } = props


  return (
    <div className='actor_card'>
        <h2 className='actor_text'>{fname} {lname}</h2>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {films.map((film) => (
            <Dropdown.Item href="#/action-1" onClick={handleClick}>{film.title}</Dropdown.Item>
          ))}
          </Dropdown.Menu>
        </Dropdown>
        {films.map((film) =>  (
          <>
            <p className='film_title'>{film.description}</p>
            <p className='film_title'>{film.release_year}</p>
            <p className='film_title'>{film.language.name}</p>
          </>
    ))}
    </div>
  )
}

