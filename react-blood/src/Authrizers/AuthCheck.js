import { Auth } from '../Authrizers/AuthProvider'
import { useNavigate } from 'react-router-dom'


export const AuthCheck =({children})=> {

  const navigate = useNavigate()
  const auth = Auth()

    return auth.admin ? children : navigate("/no-access")
 
}


export const AuthCheckDonor =({children})=>{

  const auth = Auth()
  const navigate = useNavigate()

    return auth.donor || auth.admin ? children : navigate("/no-access")
 

}