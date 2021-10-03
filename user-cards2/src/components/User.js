import React from 'react'
import { Link } from 'react-router-dom'
import './SocialCard.css'
export default function User({ id, name, username, email, address, phone, website, companyName }) {
  var image = 'https://img.icons8.com/cotton/64/000000/user-male--v4.png'
  return (
    <article className='user'>
      
      <div className='user-footer'>
        <div className="card" >
          <div className='img-container'>
            <img src={image} alt={name} />
          </div>
          <div className="card__title">{name}</div>
            <div className="card__body">
              <div className="card__username">{username} </div>
              <div className="card__website">{website} </div>
              {/* <button className="download2" onClick={handleClick}>More Details</button> */}
              <Link to={`/user/${id}`} className='download2'>
                More Details
              </Link>      
          </div>
        </div>
      </div>
    </article>
  )
}
