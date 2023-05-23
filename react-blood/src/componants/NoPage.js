import React from 'react'

const NoPage = () => {
  return (
    <div>
        <div className='container my-5 text-light border border-1'>
            <h1 className='text-right'>...</h1>
        <div className='row mt-5 border border-1'>
            <div className='col-md col-lg my-5'>
                <div className='container my-5'>
                  <h1 className='error-404'>404</h1>
                    <h1 className='text-center text-danger'>No Page-Found.</h1>
                    <p className='text-center'>Try to visit another-page. if you want authorize.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NoPage
