import React from 'react'
import Navbar from './Navbar'
import About from './About'

function Support() {
  return (
    <>
    <Navbar/>
    <div className='container p-3 bg-light'>
        <div className='row'>
            <div className=' col-md-6 col-lg-6'>
                <img src='Charity1.png' className='img-fluid' alt=''/>
            </div>
            <div className=' col-md-6 col-lg-6'>
                <h2 className='text-center text-primary'>Donate Money</h2><hr/>
            <div className="form-group">
                <label >Full Name</label>
                <input type="text" className="form-control" required placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label >Mobile Number</label>
                <input type="text" className="form-control" required placeholder="Enter mobile number"/>
            </div>
            <div className="form-group">
                <label >Address</label>
                <input type="text" className="form-control" required placeholder="Enter Address"/>
            </div>
            <div className="form-group d-flex justify-content-between ">
              <div className='mx-4'>
                <h5 className='text-success'>Your little help makes</h5>
                <h6 className='text-success'>Many faces smile</h6>
              </div>
              <div>
                <label >Amount</label>
                <input type="text" className="form-control"  required placeholder='123456'/>
              </div>
            </div>
            
                <button className='btn btn-primary btn-lg btn-block'>Donate</button>
            </div>
        </div>
    </div>
      <About/>
    </>
  )
}

export default Support
