import React from 'react'
import {BsFillCapslockFill} from 'react-icons/bs'
import {FiHelpCircle} from 'react-icons/fi'
import Navbar from './Navbar'
import About from './About'
import { useNavigate } from 'react-router-dom'

function Home() {

const navigator = useNavigate()

   const handleAplus =()=>{
            navigator('/patient/A+')
   }
   const handleBplus =()=>{
            navigator('/patient/B+')
   }
   const handleABplus =()=>{
            navigator('/patient/AB+')
   }
   const handleAminus =()=>{
            navigator('/patient/A-')
   }
   const handleBminus =()=>{
            navigator('/patient/B-')
   }
   const handleABminus =()=>{
            navigator('/patient/AB-')
   }
   const handleOplus =()=>{
            navigator('/patient/O+')
   }
   const handleOminus =()=>{
            navigator('/patient/O-')
   }
   
  return (
<>
<Navbar/>
<section id='home'>
    <div className='container p-2' data-aos="fade-up"  data-aos-delay="100">
        {/* <h5 className='text-center p-2 m-auto'>SELECT BLOOD TYPE AND SEARCH</h5> */}
        <p><a className="btn btn-primary float-right" data-toggle="collapse" href="#multiCollapseExample1"
            role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><FiHelpCircle/></a></p>
   
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
        <small>
        Click on any blood group and select your address. then you will get infromation of persons, who are near to your location 
        </small>
      </div>
    </div>
    
      <div className='d-flex justify-content-center align-items-center flex-row shadow rounded p-5 m-5 bg-light '>

        <div className='col-sm-4 col-lg-4 col-md-4'>
            <button type="button" className="btn-sm btn-danger p-2  btn-lg btn-block " onClick={handleAplus}>A+</button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleBplus}>B+ </button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleABplus}>AB+</button>
        </div>
        <div className='col-sm-4 col-lg-4 col-md-4'>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleAminus}>A-</button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleBminus}>B-</button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleABminus}>AB-</button>

        </div>
        <div className='col-sm-4 col-lg-4 col-md-4'>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleOplus}>O+ </button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleOminus}>O-</button>
        </div>

      </div>
    </div>
</section>
<section id='services'>
    <div className='container-fluid'>
        <div className='row rounded p-5 bg-light m-5'>
            <div className='col'>
        <h1 className='text-center'>Services</h1><hr/>
                <p>                    
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing a
                    nd typesetting industry. Lorem Ips
                    um has been the indust
                    ry's standard dummy text ever since the 1500s, when an unknown p
                    rinter took a galley of type and scrambled it to make a ty
                    pe specimen book. It has survived not only five centuries, but 
                    also the leap into electronic typesetting, remaining essentially unchang
                    ed. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Al
                    dus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='col-md-6 col-lg-6'>
                <img src='/hand.jpg' className='img-fluid' alt='hand'/>
            </div>
        </div>
    </div>
</section>
<section id='help'>
    <div className='container-fluid'>
        <div className='d-flex flex-row rounded p-5 bg-light m-5'>
            <div className='col'>
        <h1 className='text-center'>Help</h1><hr/>
                <p>                    
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing a
                    nd typesetting industry. Lorem Ips
                    um has been the indust
                    ry's standard dummy text ever since the 1500s, when an unknown p
                    rinter took a galley of type and scrambled it to make a ty
                    pe specimen book. It has survived not only five centuries, but 
                    also the leap into electronic typesetting, remaining essentially unchang
                    ed. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Al
                    dus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>
<a className="moving-up" role="button" href='#home'><BsFillCapslockFill /></a>
</section>
<About/>
</>
  )
}

export default Home
