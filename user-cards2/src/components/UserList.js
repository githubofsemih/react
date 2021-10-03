import React from 'react'
import User from './User'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function UserList() {
  const { users, loading } = useGlobalContext()
  //console.log(users);
  if (loading) {
    return <Loading/>
  }
  if (users.length < 1) {
    return (
      <h2 className='section-title'>
        no users matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      {/* <h2 className='section-title'>Users</h2> */}
      <div className='users-center'>
        {users.map((item) => {
          return <User key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
