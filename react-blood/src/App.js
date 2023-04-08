import React from 'react'
import Home from './componants/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Reg from './componants/Reg'
import Support from './componants/Support'
import About from './componants/About'
import Finder from './componants/Finder'
import Thanks from './componants/Thanks'
import PatientDetails from './componants/PatientDetails'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Reg/>}></Route>
      <Route path='/support' element={<Support/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/finder/:group' element={<Finder />}></Route>
      <Route path='/finder/:group/:location' element={<Finder />}></Route>
      <Route path='/thanks/:name' element={<Thanks />}></Route>
      <Route path='/thanks' element={<Thanks />}></Route>
      <Route path='/patient' element={<PatientDetails />}></Route>
      <Route path='/patient/:id' element={<PatientDetails />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
