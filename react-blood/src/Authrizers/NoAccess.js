import React from 'react'

export default function NoAccess() {
  return (
    <div>
      <div className='container my-5 text-light border border-1'>
            <h1 className='text-right'>...</h1>
        <div className='row mt-5 border border-1'>
            <div className='col-md col-lg my-5'>
                <div className='container my-5'>
                    <h1 className='text-center'>You dont have accesss to preview this Page.</h1>
                    <p className='text-center'>Try to visit profile. if you want edit information.</p>
                </div>
            </div>
        </div>
         
      </div>
    </div>
  )
}
