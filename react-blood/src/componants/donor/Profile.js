import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Profile() {
    // const [edit, setEdit] = useState(false)
    const token = localStorage.getItem('token')
    const [profile, setProfile] = useState([])

    useEffect(()=>{
      const fetchingProfile = async ()=>{
        
        let options = {
          method : "GET",
          headers  : {"Content-Type" : "application/json", "KALYAN_HEADER_KEY" :  token}
        }
        await fetch("http://localhost:3120/donor/donor", options)
        .then(response =>response.json())
        .then(data =>{
          if (data.server) {
            setProfile(data.results)
          } else {
            setProfile(data.results)
          }
        })
      }
      return ()=>fetchingProfile()
    }, [token])
    console.log(profile)

    const mapping = profile?.map((donor, d)=>{
      return (
        <div key={d}>
        <h4 className='mx-5' >Personal details</h4><hr/>
        <span className='float-right'>
        <Link className='mx-5 btn-sm btn-outline-dark' to="edit">Edit</Link></span>
        <h6 className='mx-5'>Name : {donor.donor_name}</h6>
        <h6 className='mx-5'>Mobile : {donor.donor_mobile}</h6>
        <h6 className='mx-5'>Email : {donor.donor_email}</h6>
        <h6 className='mx-5'>Age : {donor.donor_age}</h6>
        <h6 className='mx-5'>Blood group : {donor.donor_blood_group}</h6><br/>
        <div className='mb-3'>
        <h5 className='mx-5'>Address</h5><hr/>
        <span className='float-right'>
        <Link className='mx-5 btn-sm btn-outline-dark' to="addressedit">Edit</Link></span>
        <h6 className='mx-5'>Address 1 : {donor.donor_address1}</h6>
        <h6 className='mx-5'>Address 2 : {donor.donor_address2} </h6>
        </div>
        </div>
      )
    })
  return (
    <>
    <div className='container my-5 border border-1 bg-light rounded'>
        <div className='row p-2'>
            <div className='col-md-6 col-lg-6'>
                {mapping}
            </div>
            <div className='col-md-6 col-lg-6 mb-3'>
                <Outlet/>
            </div>
        </div>
    </div>
      
    </>
  )
}
