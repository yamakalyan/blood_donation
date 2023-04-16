import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigator = useNavigate()
  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark mb-3">
        <div className='container'>
  <Link className="navbar-brand" to='/' >Blood donation</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto p-1">
      <li className="nav-item">
        <Link className="nav-link active" to='/' >Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#services" >Services</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#help">Help</a>
      </li>
    </ul>
    <button className="btn btn-danger my-2 mr-2" onClick={()=>navigator('/register')}> Become Doner ?</button>
    <button className="btn btn-primary my-2 mr-2"> Support Us</button>
    <button className="btn btn-outline-primary my-2"> Login</button>
  </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
