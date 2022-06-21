import React from 'react'
import { ActorCard } from '../ActorCard/ActorCard'

export const ActorList = (props) => {

  const { actor } = props

  const actorJSX = actor.map((a) => {
    console.log(a)
    return <ActorCard fname={a.first_name} lname={a.last_name} />
  })

  return (
    <div>
      {actorJSX}
    </div>
  )
}
