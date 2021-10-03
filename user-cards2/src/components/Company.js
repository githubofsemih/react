import React from 'react'
import './SocialCard.css'
export default function Company({ name, catchPhrase, bs}) {
  return (
    <article className='company'>
      <div className="company__body">
        <div className="company__name">{name} </div>
        <div className="company__catchPhrase">{catchPhrase} </div>     
        <div className="company__bs">{bs} </div>    
      </div>
    </article>
  )
}