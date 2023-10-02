import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serviceUrl } from '../helpers/Helper'
import { users } from '../fakeData/users'

function Finder() {
  const [group, setGroup] = useState([])
  const [search, setSearch] = useState([])
  const params = useParams()
  const keys = ['donor_address1']
  const url = serviceUrl()

  // useEffect(()=>{
  //     const fetching = async ()=>{
  //         const endpoint = url + `donor/`
  //         await fetch(endpoint)
  //         .then(response =>response.json())
  //         .then(data =>{
  //             if (data.server) {
  //                 setGroup(data.results)
  //             } else {
  //                 alert("no data found")
  //             }
  //         })
  //     }
  //     return ()=> fetching()
  // }, [])

  const usersValues = users
  var tableMapping = usersValues.filter((blood) => blood.donor_blood_group.includes(params.group))

  const values = tableMapping.filter((filtered) => keys.some((key) => filtered[key].includes(search))).map((donor, d) => {
    const tableNUm = d + 1;
    return (
      <tr key={d}>
        <td className='t-data'>{tableNUm}</td>
        <td className='t-data'>{donor.donor_name}</td>
        <td className='t-data'>{donor.donor_age}</td>
        <td className='t-data'>{donor.donor_blood_group}</td>
        <td className='t-data'><a href={`tel:${donor.donor_mobile}`}>{donor.donor_mobile}</a></td>
      </tr>
    )
  })

  return (
    <>
      <div className='container-fluid '>
        <div className='row d-flex justify-content-center align-items-center m-3'>
          <input type='text' className='search-bar' onChange={(e) => setSearch(e.target.value)} placeholder='Enter your area to find donor' />
        </div>
        <p className='text-center text-light'>Click on number to call directly.</p>
        <div className='d-flex justify-content-center align-items-center my-5'>
          <table className="table table-hover table-bordered table-dark p-4">
            <thead>
              <tr>
                <th className='t-data' scope="col">Sl/No.</th>
                <th className='t-data' scope="col">Name</th>
                <th className='t-data' scope="col">Age</th>
                <th className='t-data' scope="col">Blood-Group</th>
                <th className='t-data' scope="col">Contact</th>
              </tr>
            </thead>
            <tbody className='t-width position-relative'>
              {values}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Finder
