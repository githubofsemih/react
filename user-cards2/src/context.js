import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://jsonplaceholder.typicode.com/users/?results=10'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
            
      if (data) {
        console.log(data);
        setUsers(data)
      } else {
        setUsers([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[])
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <AppContext.Provider
      value={{ loading, users}}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
