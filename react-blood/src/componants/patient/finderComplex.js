import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serviceUrl } from '../helpers/Helper'

function Finder() {
    const [group, setGroup] = useState([])
    const [search, setSearch] = useState([])
    const [searchValue, setSearchValue] = useState([])
    const [searchMethod, setSearchMethod] = useState(false)
    const params = useParams()
    const keys = ['donor_address1', 'donor_address2']
    const url = serviceUrl()
   
    useEffect(()=>{
        const fetching = async ()=>{
            const endpoint = url + `donor/`
            await fetch(endpoint)
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

    var tableMapping = group.find((blood)=>blood.donor_blood_group.includes(params.group))

    useEffect(()=>{
        const fetchingSearch = async ()=>{
            const options = {
                method : 'POST',
                headers : {'content-type' : 'application/json'},
                body : JSON.stringify({
                    blood_group : params.group
                })
            }
            const searchEndPoint = url + `donor/search?q=${params.location}`
            await fetch(searchEndPoint, options)
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
      const tableNUm = d + 1;

                return (
        <tr key={d}>
            <td className='t-data'>{tableNUm}</td>
            <td className='t-data'>{donor.donor_name}</td>
            <td className='t-data'>{donor.donor_blood_group}</td>
            <td className='t-data'><a href={`tel:${donor.donor_mobile}`}>
                    {donor.donor_mobile}
                    </a>
                    </td>
        </tr>
                )
            }) 
        )
    } else {
        return (
            tableMapping.filter((filtered)=>keys.some((key)=>filtered[key].includes(search))).map((donor, d)=>{
      const tableNUm = d + 1;

                return (
        <tr key={d}>
            <td className='t-data'>{tableNUm}</td>
            <td className='t-data'>{donor.donor_name}</td>
            <td className='t-data'>{donor.donor_blood_group}</td>
            <td className='t-data'><a href={`tel:${donor.donor_mobile}`}>
                    {donor.donor_mobile}
                    </a>
                    </td>
        </tr>
                )
            }) 
        )
    }
    }

var groupMapping = group.map((donor, b)=>{
    const tableNUm = b + 1;

        return(
            <tr key={b}>
                <td className='t-data'>{tableNUm}</td>
                <td className='t-data'>{donor.donor_name}</td>
                <td className='t-data'>{donor.donor_blood_group}</td>
                <td className='t-data'><a href={`tel:${donor.donor_mobile}`}>
                    {donor.donor_mobile}
                    </a>
                    </td>
            </tr>
    )
})

  return (
    <>
    <div className='container-fluid '>
        {searchMethod ? '':
        <div className='row d-flex justify-content-center align-items-center m-3'>
            <input type='text' className='search-bar' onChange={(e)=>setSearch(e.target.value)} placeholder='Enter your area to find donor'/>
        </div>
            }
        <p className='text-center text-light'>Click on number to call directly.</p>
        <div className='d-flex justify-content-center align-items-center my-5'>
        <table className="table table-hover table-bordered table-dark p-4">
                <thead>
                    <tr>
                    <th className='t-data' scope="col">Sl/No.</th>
                    <th className='t-data' scope="col">Name</th>
                    <th className='t-data' scope="col">Blood-Group</th>
                    <th className='t-data' scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody className='t-width position-relative'>
                { tableMapping.length !== 0 ? filteredData() : groupMapping }
                </tbody>
                </table>
        </div>
    </div>
    <div className='test'></div>
    </>
  )
}

export default Finder
