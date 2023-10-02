import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { serviceUrl } from '../helpers/Helper'

export default function Login() {
    const [username, setUsername] = useState('')
    const [userPassword, setuserpassword] = useState('')
    const [loginMsg, setLoginmsg] = useState('')

    const navigator = useNavigate()
    const serviceURl = serviceUrl()

    const loginUser =(e)=>{
        e.preventDefault()

        const fetchingLogin = async()=>{

            const options = {
                method : "POST",
                headers : {'Content-Type' : "application/json"},
                body : JSON.stringify({
                    donor_email : username,
                    donor_mobile : username,
                    donor_password : userPassword
                })
            }
            const endpoint = serviceURl + "donor/login"
            await fetch(endpoint, options)
            .then(response =>response.json())
            .then(data =>{
                if (data.server) {
                    navigator('/')
                    localStorage.setItem('token', data.token)
                } else {
                    setLoginmsg(data.message)
                    localStorage.removeItem('token')
                }
            })
        }
        return fetchingLogin()
    }

  return (
    <>
    <div className='container bg-light p-3 my-5'>
        <div className='row'>
            <div className='col-md col-lg-4 m-auto'>
                <img src='login.png' className='img-fluid' alt='' />
            </div>
            <div className='col-md col-lg-6 mt-4'>
        <h4 className='text-center text-primary'>Login</h4><hr/>
                <form onSubmit={loginUser} action='login.php' method='POST'>
            <div className="form-group mb-3">
                <label>Mobile {'(or)'} Gmail</label>
            <input type="text" className="form-control" placeholder="Mobile / @gmail.com.." required onChange={(e)=>setUsername(e.target.value)}/>
            </div> 
            <div className="form-group mb-3">
                <label>Enter password</label>
            <input type="password" className="form-control" placeholder="Enter password" required onChange={(e)=>setuserpassword(e.target.value)}/>
            </div>
            <p className='text-center'>{loginMsg}</p>
            <button className='btn-sm btn-lg btn-block btn-primary mb-3' type='submit'>Push me in ?</button>
                </form>
            </div>
        </div>
    </div>
      
    </>
  )
}
