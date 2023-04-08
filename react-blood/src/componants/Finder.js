import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import About from './About'

function Finder() {
    const [group, setGroup] = useState([])
    const [search, setSearch] = useState([])
    const [msg, setMsg] = useState('')
    const params = useParams()
    const groupName = params.group

    const num = 1
    const increment = num * 1
    
    useEffect(()=>{
        const fetching = async ()=>{
            await fetch('http://localhost:3120/donor/')
            .then(response =>response.json())
            .then(data =>{
                if (data.server) {
                    setGroup(data.results)
                    locationGettingSearch()
                } else {
                    alert("no data found")
                }
            })
        }
        return ()=> fetching()
    }, [])

    const locationGettingSearch = ()=>{

        const searchLocation = params.location

        fetch(`http://localhost:3120/donor/search/?text=${searchLocation}`)
        .then(response =>response.json())
        .then(data =>{
            if (data.server) {
                setSearch(data.results)
                setMsg(data.message)
            } else {
                setMsg(data.message)
            }
        })
    }
    console.log(search)
    console.log(msg)

    const filtering = group.filter((f)=>f.donor_blood_group === groupName)

    const tableMapping = filtering.map((donor, d)=>{
        return (
                <tr key={d}>
                    <td className='t-data'>{increment}</td>
                    <td className='t-data'>{donor.donor_name}</td>
                    <td className='t-data'>{donor.donor_mobile}</td>
                    <td className='t-data'>{donor.donor_email}</td>
                    <td className='t-data'>{donor.donor_blood_group}</td>
                    <td className='t-data'>{donor.donor_address1}</td>
                    <td className='t-data'>{donor.donor_address2}</td>
                </tr>
        )
    })
   

  return (
    <>
    <Navbar/>
    <div className='container-fluid '>
        <div className='row d-flex justify-content-center align-items-center m-3'>
            <form >
            {/* <label>Enter your area to find donor</label> */}
            <input type='search' className='search-bar' placeholder='Enter your area to find donor'/>
            <button className='btn btn-success mx-2' type='submit'>Search</button>
            </form>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <table className="table-sm table table-hover table-bordered table-dark p-3">
                <thead>
                    <tr>
                    <th className='t-data' scope="col">Sl/No.</th>
                    <th className='t-data' scope="col">Name</th>
                    <th className='t-data' scope="col">Contact</th>
                    <th className='t-data' scope="col">Email</th>
                    <th className='t-data' scope="col">Blood-Group</th>
                    <th className='t-data' scope="col">Available Location 1</th>
                    <th className='t-data' scope="col">Available Location 2</th>
                    {/* <th className='t-data' scope="col">Alert Him/Her</th> */}
                    </tr>
                </thead>
                <tbody className='t-width position-relative'>
                {tableMapping}
                </tbody>
                </table>
        </div>
    </div>
    <div className='test'></div>
    <About />
    </>
  )
}

export default Finder
