import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import About from './About'

function Finder() {
    const [group, setGroup] = useState([])
    const [search, setSearch] = useState([])
    const [searchValue, setSearchValue] = useState([])
    const [searchMethod, setSearchMethod] = useState(false)
    const params = useParams()
    const keys = ['donor_address1', 'donor_address2']

    const num = 1
    const increment = num * 1
    
    useEffect(()=>{
        const fetching = async ()=>{
            await fetch('http://localhost:3120/donor/')
            .then(response =>response.json())
            .then(data =>{
                if (data.server) {
                    setGroup(data.results)
                } else {
                    alert("no data found")
                }
            })
        }
        return ()=> fetching()
    }, [])

    var tableMapping = group.filter((blood)=>blood.donor_blood_group.includes(params.group))

    useEffect(()=>{
        const fetchingSearch = async ()=>{
            const options = {
                method : 'POST',
                headers : {'content-type' : 'application/json'},
                body : JSON.stringify({
                    blood_group : params.group
                })
            }
            await fetch(`http://localhost:3120/donor/search?q=${params.location}`, options)
            .then(response =>response.json())
            .then(data =>{
                if (data.server) {
                    setSearchMethod(data.server)
                    setSearchValue(data.filtering)
                    filteredData()
                } else {
                    setSearchMethod(data.server)
                    setSearchValue(data.filtering)
                    filteredData()
                }
            })
        }
        fetchingSearch()
    }, [])

    const filteredData =()=>{

    if (searchValue !== undefined) {
        return (
            searchValue.map((donor, d)=>{
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
        )
    } else {
        return (
            tableMapping.filter((filtered)=>keys.some((key)=>filtered[key].includes(search))).map((donor, d)=>{
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
        )
    }
    }

var groupMapping = group.map((donor, b)=>{
        return(
            <tr key={b}>
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
console.log(searchMethod)
console.log(searchValue)

  return (
    <>
    <Navbar/>
    <div className='container-fluid '>
        
        <div className='row d-flex justify-content-center align-items-center m-3'>
            <input type='text' className='search-bar' onChange={(e)=>setSearch(e.target.value)} placeholder='Enter your area to find donor'/>
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
                { tableMapping.length !== 0 ? filteredData() : groupMapping }
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
