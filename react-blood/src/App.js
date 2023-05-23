import React from "react";
import Home from "./componants/UI/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Reg from "./componants/donor/Reg";
import Support from "./componants/UI/Support";
import About from "./componants/UI/About";
import Finder from "./componants/patient/Finder";
import Thanks from "./componants/Thanks";
import PatientDetails from "./componants/patient/PatientDetails";
import Services from "./componants/UI/Services";
import Help from "./componants/UI/Help";
import Login from "./componants/donor/Login";
import Navbar from "./componants/UI/Navbar";
import { AuthProvider } from "./Authrizers/AuthProvider";
import Profile from "./componants/donor/Profile";
import Edit from "./componants/donor/Edit";
import Manage from "./componants/admin/Manage";
import { AuthCheck, AuthCheckDonor } from "./Authrizers/AuthCheck";
import AddressEdit from "./componants/donor/AddressEdit";
import NoAccess from "./Authrizers/NoAccess";
import NoPage from "./componants/NoPage";
import SuppThanks from "./componants/SuppThanks";
import EditDonors from "./componants/admin/EditDonors";
import Scroll from "./componants/Scroll";
import Donations from './componants/admin/Donations'
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Reg />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/support" element={<Support />}></Route>
            <Route path="/about" element={<About />}></Route>
            
            <Route path="/finder/:group" element={<Finder />}></Route>
            <Route path="/finder/:group/:location" element={<Finder />}></Route>

            <Route path="/thanks/:name" element={<Thanks />}></Route>
            <Route path="/suppthanks/:name" element={<SuppThanks />}></Route>

            <Route path="/patient" element={<PatientDetails />}></Route>
            <Route path="/patient/:group" element={<PatientDetails />}></Route>

            <Route path="/profile" element={<AuthCheckDonor><Profile /></AuthCheckDonor>}>
              <Route path="edit" element={<Edit />} />
              <Route path="addressedit" element={<AddressEdit />} />
            </Route>

            <Route path="/manage"element={<AuthCheck><Manage /></AuthCheck>}>
              <Route path="editDonors/:id" element={<EditDonors />} />
            </Route>
            <Route path="/donations" element={<AuthCheck><Donations /></AuthCheck>} ></Route>

            <Route path="/no-access" element={<NoAccess />} />
            <Route path="*" element={<NoPage />} />

          </Routes>
          <About />
          <Scroll/>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
