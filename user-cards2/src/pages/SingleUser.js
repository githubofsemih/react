import React from 'react'
import Loading from '../components/Loading'
import Address from '../components/Address'
import { useParams, Link } from 'react-router-dom'

export default function SingleUser() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState(null)
  const [geo, setGeo] = React.useState(null)
  const [address, setAddress] = React.useState(null)
  const [company, setCompany] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
        const data = await response.json()
        if (data) {
        console.log(data.address)
          const{
            lat: addressGeoLat,
            lng: addressGeoLng,
          } = data.address.geo;
          const newGeo = {
            addressGeoLat,
            addressGeoLng,
          };
          setGeo(newGeo);
          console.log(geo);
          const {
            street:addressStreet,
            suite:addressSuite,
            city:addressCity,
            zipcode:addressZipcode,
            geo:addressGeo
          } = data.address;
          const newAddress = {
            addressStreet,
            addressSuite,
            addressCity,
            addressZipcode,
            addressGeo
          };
          console.log(newAddress);
          setAddress(newAddress);    // not working
          console.log(address);
          const { name:companyName } = data.company;
          const newCompany = { companyName };
          setCompany(newCompany);
          console.log(newCompany)
          const {
            id,
            name,
            username,
            email,
            //address=newAddress,
            phone,
            website,
            company,
          } = data
          const newUser = {
            id,
            name,
            username,
            email,
            address,
            phone,
            website,
            companyName,
          };
          console.log(newUser);
          setUser(newUser)
        } else {
          setUser(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getUser()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!user) {
    return <h2 className='section-title'>no user to display</h2>
  } else {

    // const{
    //   street,
    //   suite,
    //   city,
    //   zipcode,
    // } = address
    const {
      name,
      username,
      email,
      address,
      phone,
      companyName,
    } = user;
    return (
      <section className='section user-section'>
        <Link to='/' className='download2'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='person'>
          
          <div className='person-info'>
            <p>
              <span className='person-data'>name :</span> {name}
            </p>
            <p>
              <span className='person-data'>username :</span> {username}
            </p>
            <p>
              <span className='person-data'>email :</span> {email}
            </p>
            <p>
              <span className='person-data'>address :</span> {address}
            </p>
            <p>
              <span className='person-data'>phone :</span> {phone}
            </p>
            <p>
              <span className='person-data'>company :</span> {companyName}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
