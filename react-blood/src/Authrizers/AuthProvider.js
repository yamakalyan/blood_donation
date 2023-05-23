import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export const AuthProvider =({children})=> {
    const [donor, setDonor] = useState(false)
    const [admin, setAdmin] = useState(false)
    const token = localStorage.getItem('token')
    const navigator = useNavigate()

   useEffect(()=>{

    if (token === null || undefined) {
      navigator('/')
      localStorage.removeItem('token')
      
    } else {
      
    const fetchingAuthorization = async ()=>{
      
      const options = {
        method : 'POST',
        headers : {'content-type' : 'application/json', 'KALYAN_HEADER_KEY' : token}
      }
    await fetch('http://localhost:3120/donor/auth', options)
      .then(response =>response.json())
      .then(data =>{
        if (data.server) {
          if (data.results[0].donor_role === 0) {
            setDonor(data.server)
          } else if(data.results[0].donor_role === 1){
            setAdmin(data.server)
          }
        } else{
          setDonor(data.server)
          setAdmin(data.server)
        }
      })
    }
    fetchingAuthorization()
  }
   }, [])

   return <AuthContext.Provider value={{donor, admin}}>{children}</AuthContext.Provider>
}

export const Auth =()=>{

 return useContext(AuthContext)

}
