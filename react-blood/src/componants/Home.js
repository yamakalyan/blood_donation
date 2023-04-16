import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import About from './About'


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
            navigator('/patient/')
   }
   
  return (
<>
<Navbar/>
<div className='container-fluid'>
<section className='container' id='main'>
<div id="carouselExampleIndicators" className="carousel slide m-5" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="img-fluid" src="blood2.png" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="blood1.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="Charity 2.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</section>
<section id='home'>
    <div className='container p-2'>
      <div className='d-flex justify-content-center align-items-center flex-row shadow rounded p-5 bg-light '>

        <div className='col-sm col-lg col-md'>
            {/* <button type="button" className="btn-sm btn-danger p-2  btn-lg btn-block " onClick={handleAplus}>A+</button>
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
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleOminus}>O-</button> */}
            <button type="button" className="btn btn-danger p-2 btn-lg btn-block " onClick={handleOminus}>Click here to Search Donor in your Area</button>
        </div>

      </div>
    </div>
</section>
<section id='services'>
    <div className='container-fluid'>
        <div className='row rounded p-5 bg-light my-5'>
            <div className='col-lg-6 col-md-6'>
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
</div>
<About/>
</>
  )
}

export default Home
