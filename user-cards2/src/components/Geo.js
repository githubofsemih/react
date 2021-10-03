import React from 'react'
import './SocialCard.css'
export default function Geo({ addressGeoLat, addressGeoLng }) {
  return (
    <article className='geo'>
      <div className="geo__body">
              <div className="geo__lat">{addressGeoLat} </div>
              <div className="geo__lng">{addressGeoLng} </div>     
          </div>
    </article>
  )
}