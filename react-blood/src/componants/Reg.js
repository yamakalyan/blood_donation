import React, { useState } from 'react'
import Navbar from './Navbar'
import About from './About'
import { useNavigate } from 'react-router-dom'

function Reg() {
 const [donorName, setDonorname] = useState('')
 const [donorMobile, setDonorMobile] = useState('')
 const [donorEmail, setDonorEmail] = useState('')
 const [donorAge, setDonorAge] = useState('')
 const [donorBloodGroup, setBloodGroup]= useState('')

 const [donorAddress1, setDonorAddress1] = useState('')
 const [donorAddress2, setDonorAddress2] = useState('')

 const [pincode1, setPincode1] = useState('')
 const [pincode2, setPincode2] = useState('')

 const [donorState1, setDonorState1] = useState('')
 const [donorState2, setDonorState2] = useState('')

 const [city1, setCity1] = useState('')
 const [city2, setCity2] = useState('')
               
 const [regsiteredMsg, setregisteredMsg] = useState('')

 const address1 = donorAddress1 +' '+ city1 + ' '+ donorState1 + ' ' + pincode1
 const address2 = donorAddress2 + ' ' + city2 + ' '+ donorState2 + ' ' + pincode2

 const navigator = useNavigate()

 const handleRegistration =(e)=>{
    e.preventDefault()

    const creation = {
        donor_name : donorName,
        donor_mobile : donorMobile,
        donor_email : donorEmail,
        donor_age : donorAge,
        donor_blood : donorBloodGroup,
        donor_address1 : address1,
        donor_address2 : address2
    }
    const options = {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(creation)
    }
    fetch('http://localhost:3120/donor/create', options)
    .then(response =>response.json())
    .then(data =>{
        if (data.server) {
            setregisteredMsg(data.message)
            navigator('/thanks')
        } else {
            setregisteredMsg(data.message)
        }
    })
 }
    return (
    <>
    <Navbar/>
    <div className='container-fluid'>
            <form onSubmit={handleRegistration}>
        <div className='row bg-light p-5'>
            <div className='col-sm-4 col-md-4 col-lg-4 mt-3'>
                <img src='blood1.png' className='img-fluid' alt='blood'/>
            </div>
            <div className='col-sm-4 col-md-4 col-lg-4 mt-3 shadow py-3'>
                <h2 className='text-primary text-center'>Personal details</h2><hr/>
                {regsiteredMsg ? 
                <h4 className='text-success text-center'>{regsiteredMsg}</h4>
                    :
            <h4 className='text-danger text-center'>{regsiteredMsg}</h4>}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <span className="input-group-text">Full name</span>
                    </div>
                <input type="text" className="form-control" placeholder="full-name" required onChange={(e)=>setDonorname(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <span className="input-group-text">Mobile number</span>
                    </div>
                <input type="text" className="form-control" placeholder="mobile" required onChange={(e)=>setDonorMobile(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <span className="input-group-text">Gmail</span>
                    </div>
                <input type="text" className="form-control" placeholder="@gmail" required onChange={(e)=>setDonorEmail(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <span className="input-group-text" >Age</span>
                    </div>
                <input type="text" className="form-control" placeholder="age" required onChange={(e)=>setDonorAge(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <span className="input-group-text">Blood Group</span>
                    </div>
                <select type="text" className="form-control" required onChange={(e)=>setBloodGroup(e.target.value)}>
                         <option selected>Choose..</option>
                         <option value='A+'>A+</option>
                         <option value='A-'>A-</option>
                         <option value='B+'>B+</option>
                         <option value='B-'>B-</option>
                         <option value='AB+'>AB+</option>
                         <option value='AB-'>AB-</option>
                         <option value='O+'>O+</option>
                         <option value='O-'>O-</option>
                </select>
                </div>
                <div className="form-check m-2 ">
                <input className="form-check-input" type="checkbox" required />
                <label className="form-check-label" >
                I Agreee <a href='/'>terms and conditions</a>
                </label>
                </div>
                </div>
           
             <div className='col-sm-4 col-md-4 col-lg-4 mt-3'>
                <h4 className='text-center'>Add Address where your available</h4><hr/>

            <div className="form-group">
                <label >Address 1</label>
                <input type="text" className="form-control" onChange={(e)=>setDonorAddress1(e.target.value)} required placeholder="Ex: Mondal"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label >City</label>
                <input type="text" className="form-control" onChange={(e)=>setCity1(e.target.value)} required placeholder='Ex: Nizamabad'/>
                </div>
                <div className="form-group col-md-4">
                <label>State</label>
                <select className="form-control" onChange={(e)=>setDonorState1(e.target.value)} required>
                    <option selected>Choose...</option>
                    <option value='Telangana'>Telangana</option>
                    <option value='Andrapradesh'>AndraPradesh</option>
                    <option value='Karnataka'>Karnataka</option>
                    <option value='Kerala'>Kerala</option>
                    <option value='Maharashtra'>Maharashtra</option>
                    <option value='Odisha'>Odisha</option>
                    <option>...</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label>Pincode</label>
                <input type="text" className="form-control" onChange={(e)=>setPincode1(e.target.value)} required placeholder='123456'/>
                </div>
            </div>
            <div className="form-group">
                <label>Address 2</label>
                <input type="text" className="form-control" onChange={(e)=>setDonorAddress2(e.target.value)} required placeholder="Ex: Mondal"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label >City</label>
                <input type="text" className="form-control" onChange={(e)=>setCity2(e.target.value)} required placeholder='Ex: Nizamabad'/>
                </div>
                <div className="form-group col-md-4">
                <label>State</label>
                <select className="form-control" onChange={(e)=>setDonorState2(e.target.value)} required>
                    <option selected>Choose...</option>
                    <option value='Telangana'>Telangana</option>
                    <option value='Andrapradesh'>AndraPradesh</option>
                    <option value='Karnataka'>Karnataka</option>
                    <option value='Kerala'>Kerala</option>
                    <option value='Maharashtra'>Maharashtra</option>
                    <option value='Odisha'>Odisha</option>
                    <option>...</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label >Pincode</label>
                <input type="text" className="form-control" onChange={(e)=>setPincode2(e.target.value)} required placeholder='123456'/>
                </div>
            </div>
            <div className="form-group">
            </div>
            <button type="submit" className="btn btn-success btn-lg btn-block">Submit & Save Donor</button>
            </div> 
        </div>
        </form>
    </div>
      <About/>
    </>
  )
}

export default Reg