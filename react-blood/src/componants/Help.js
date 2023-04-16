import React from 'react'
import {BsFillCapslockFill} from 'react-icons/bs'
import Navbar from './Navbar'
import About from './About'

function Help() {
  return (
    <div>
      <Navbar/>
      <section id='help'>
    <div className='container-fluid'>
        <div className='row rounded p-5 bg-light my-5'>
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
<a className="moving-up back-to-top" role="button" href='#home'><BsFillCapslockFill /></a>
</section>
<About/>
    </div>
  )
}

export default Help
