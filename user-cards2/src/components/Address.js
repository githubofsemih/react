import React from 'react'
import Geo from './Geo'
import './SocialCard.css'
export default function Address({ addressStreet, addressSuite, addressCity, addressZipcode, addressGeo }) {
  return (
    <article className='address'>
      <div className="address__body">
              <div className="street">{addressStreet} </div>
              <div className="suite">{addressSuite} </div>
              <div className="city">{addressCity} </div>
              <div className="zipcode">{addressZipcode} </div>
              <Geo />
          </div>
    </article>
  )
}
