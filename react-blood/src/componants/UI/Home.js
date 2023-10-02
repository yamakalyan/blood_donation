import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

const navigator = useNavigate()

   const handleAplus =()=>{
            navigator('/finder/A+')
   }
   const handleBplus =()=>{
            navigator('/finder/B+')
   }
   const handleABplus =()=>{
            navigator('/finder/AB+')
   }
   const handleAminus =()=>{
            navigator('/finder/A-')
   }
   const handleBminus =()=>{
            navigator('/finder/B-')
   }
   const handleABminus =()=>{
            navigator('/finder/AB-')
   }
   const handleOplus =()=>{
            navigator('/finder/O+')
   }
   const handleOminus =()=>{
            navigator('/finder/O-')
   }
   
  return (
<>
<section className='container mt-4' id='main'>
<div id="carouselExampleIndicators" className="carousel slide m-5" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="img-fluid" src="1.jpg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="2.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="3.jpg" alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="4.jpg" alt="Third slide"/>
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
    <div className='container-fluid p-3'>
      <div className='d-flex justify-content-center align-items-center rounded flex-row p-5 bg-light '>

        <div className='col-lg-4 col-md'>
            <button type="button" className="btn-sm btn-danger p-2  btn-lg btn-block " onClick={handleAplus}>A+</button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleBplus}>B+ </button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleABplus}>AB+</button>
        </div>
        <div className='col-lg-4 col-md'>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleAminus}>A-</button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleBminus}>B-</button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleABminus}>AB-</button>

        </div>
        <div className='col-lg-4 col-md'>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleOplus}>O+ </button>
            <button type="button" className="btn-sm btn-danger p-2 btn-lg btn-block " onClick={handleOminus}>O-</button>
            {/* <button type="button" className="btn-sm btn-danger btn-block p-2" onClick={handleOminus}>Click to Search Donor in your Area</button> */}
        </div>
      </div>
    </div>
</section>
<section id='services'>
    <div className='container-fluid'>
        <div className='row rounded p-5 bg-dark text-light'>
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
                <img src='/hand.jpg' className='img-fluid shadow' alt='hand'/>
            </div>
        </div>
    </div>
</section>
<section id='details'>
    <div className='container-fluid'>
        <div className='row rounded p-5 bg-light'>
        <div className='col-md-6 col-lg-6'>
                <img src='1.jpg' className='img-fluid shadow' alt='hand'/>
            </div>
            <div className='col-lg-6 col-md-6'>
        <h1 className='text-center'>Foundation Acts</h1><hr/>
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
</section>
</>
  )
}

export default Home
