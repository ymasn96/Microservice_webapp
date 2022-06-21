import React from 'react'
import { ActorCard } from '../ActorCard/ActorCard'
import "./ActorList.css"

export const ActorList = (props) => {

  const { actors } = props

  const actorJSX = actors.map((a) => {
    return <ActorCard key={a.id} fname={a.first_name} lname={a.last_name} />
  })

  return (
    <div className='list-container'>
      <div className='actor_list'>
        {actorJSX}
      </div>
    </div>
  )
}
