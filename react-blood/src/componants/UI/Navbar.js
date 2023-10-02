import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Auth } from '../../Authrizers/AuthProvider'
function Navbar() {
  const navigator = useNavigate()
  const auth = Auth()
  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light mb-3">
        <div className='container'>
        <img src='logo.jpg' alt='' width="40px" className='rounded-circle mr-2'/>
  <Link className="navbar-brand" to='/' > <h6 className='title-name'><b>స్నేహాలయా స్వచ్ఛంద సంస్థ</b></h6></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto p-1">
     
      <li className="nav-item">
        <NavLink className="nav-link" to="/services" >Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/help" >Help</NavLink>
      </li>

      {auth.donor || auth.admin ?
        <li className="nav-item">
        <NavLink className="nav-link" to="/profile" >Profile</NavLink>
        </li>
        :
        ''
      }

      {auth.admin &&
      <>
      <li className="nav-item">
        <NavLink className="nav-link" to='/donations' >Donations</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" to='/manage' >Manage List</NavLink>
      </li> 
      </>
      }
       
    </ul>
    {auth.donor || auth.admin ?
    <>
    <button className="btn btn-outline-primary my-2 mr-2" onClick={()=>navigator('/support')}> Support Us</button>
    <button className="btn btn-primary my-2 mr-2" onClick={()=>{window.location.reload(false); localStorage.removeItem('token');navigator('/login')}}> Log-out</button>
    </>
    :
    <>
    <button className="btn btn-danger my-2 mr-2" onClick={()=>navigator('/register')}> Become Doner ?</button>
    <button className="btn btn-outline-primary my-2 mr-2" onClick={()=>navigator('/support')}> Support Us</button>
  <button className="btn btn-outline-primary my-2 mr-2" onClick={()=>navigator('/login')}> Login</button>
    </>
     }
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
