import React from 'react'
import '../App.css'
import {ImWhatsapp} from 'react-icons/im'
import {CgMail} from 'react-icons/cg'
import {FaMobileAlt, FaFacebookSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function About() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
    <section id="about">
    <div className='container-sm about'>
       <div className='d-flex flex-row '>
        <div className='col-lg-6 col-md mt-4'>
            <h5>Address</h5><hr className='hr-line'/>
            <h6 >Location : Velpur</h6>
            <h6 >Mondal : Velpur</h6>
            <h6 >District : Nizamabad</h6>
            <h6 >Pincode : 503225</h6>
        </div>
        <div className='col-lg-6 col-md mt-4'>
            <h5>Address</h5><hr className='hr-line'/>
            <h6 >Location : Velpur</h6>
            <h6 >Mondal : Velpur</h6>
            <h6 >District : Nizamabad</h6>
            <h6 >Pincode : 503225</h6>
        </div>
        </div>
    </div>
        <div className='links'>
        <div className='row mt-4'>
          <h2><button className='links-button'><FaMobileAlt/></button></h2>
          <h2><button className='links-button'><CgMail/></button></h2>
          <h2><button className='links-button'><ImWhatsapp/></button></h2>
          <h2><button className='links-button'><FaFacebookSquare/></button></h2>
        </div>
        </div> 
    <div className='container mt-3'>
        <p className='text-center copyright'>All Copyrights @ {year} reserved by Blood Group</p>
        <p className='privacy'>
            <Link to=''><span>privacy</span></Link>|
            <Link to=''><span>Licenece</span></Link>|
            <Link to=''><span>privacy</span></Link>|
            <Link to=''><span>Licenece</span></Link>|
            <Link to=''><span>Certificate</span></Link>
            </p>
    </div>
</section>
    </>
  )
}

export default About
