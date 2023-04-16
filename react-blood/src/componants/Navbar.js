import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigator = useNavigate()
  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light mb-3">
        <div className='container'>
  <Link className="navbar-brand" to='/' >Blood donation</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto p-1">
      {/* <li className="nav-item">
        <Link className="nav-link" to='/' >Home</Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/services" >Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/help">Help</Link>
      </li>
    </ul>
    <button className="btn btn-danger my-2 mr-2" onClick={()=>navigator('/register')}> Become Doner ?</button>
    <button className="btn btn-primary my-2 mr-2" onClick={()=>navigator('/support')}> Support Us</button>
  </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
