/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect  } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import {Link} from "react-router-dom"
import Navbar2 from "../components/Navbar2"
import Adminpage from './Adminpage'

const formPage = () => {

  const isProductAvailable = true;
  const [error , setError] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [Aadhaar, setAadhaar] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [slot, setSlot] = useState('');


  // COVID-19 details
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await Axios.post("http://localhost:5000/api/contacts/userdetails",{
        name,
        age,
        Aadhaar,
        state,
        country,
        city,
        email,
        address,
        time,
        slot 
      });
      setName('');
      setAge('');
      setAddress('');
      setAadhaar("");
      setEmail(" ");
      setCity(" ");
      setCountry(" ");
      setSlot(" ");
      setState(" ");
      setTime(" ");
      setError(false);
      console.log(res)
    }catch(err){
      setError(true)
      console.log(err)
    }
  };

  const [formData, setFormData] = useState({
       name:"",
        age:"",
        Aadhaar:"",
        state:"",
        country:"",
        city:"",
        email:"",
        address:"",
        time:"",
        slot:"" 
  });
  

  return (
   
     

    <div className="">
      <Navbar2/>
 {/* Personal information */}
      <div>
      <h2 className="p-1 text-center z-index shadow-black bg-blue-100 text-s md:text-lg text-black-200">  Need help finding a COVID‑19 vaccine in the U.S.? Call <span className="text-blue-500">1-800-232-0233 (TTY 1-888-720-7489)</span></h2>

        <div className="bg-blue-500 ">
          <h2 className="text-3xl  font-bold mb-20  w-full p-3 text-white text-center">Personal Information</h2>
          <form className=" mb-2" onSubmit={handleFormSubmit}>

            <div className='md:flex md:w-[1/2]  md:mr-20  md:justify-center md:space-x-10 mt-4 '>
            <div className='md:w-80  md:mr-24' name="left">
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Name"
              className=' className="appearance-none shadow-xl block w-full px-3 py-2 border border-gray-300 rounded-md  placeholder-gray-400 md:mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm '
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
             <h3>Age</h3>
            <input
              type="text"
              placeholder="Age"
              value={age}
              className=' className="appearance-none  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xl placeholder-gray-400   md:mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              onChange={(e) => setAge(e.target.value)}
            />
             <h3>Aadhaar</h3>
            <input
              type="text"
              placeholder="Adhare"
              value={Aadhaar}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xl placeholder-gray-400   md:mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setAadhaar(e.target.value)}
            />
             <h3>State</h3>
            <input
              type="text"
              placeholder="State"
              value={state}
              className=' className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xl placeholder-gray-400    md:mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              onChange={(e) => setState(e.target.value)}
            />
            </div>
            <div className='md:w-80 '>
            <h3 >Country</h3>
            <input
              type="text"
              placeholder="Country"
              value={country}
              className=' className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xl placeholder-gray-400  md:mb-2  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              onChange={(e) => setCountry(e.target.value)}
            />
             <h3>City</h3>
            <input
              type="text"
              placeholder="City"
              value={city}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xl placeholder-gray-400   md:mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setCity(e.target.value)}
            />
             <h3>Email</h3>
            <input
              type="text"
              placeholder="Email"
              value={email}
              className=' className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xl placeholder-gray-400 focus:outline-none  md:mb-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              onChange={(e) => setEmail(e.target.value)}
            />
             <h3>Address</h3>
            <input
              type="text"
              placeholder="Address"
              value={address}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xl placeholder-gray-400 focus:outline-none  md:mb-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setAddress(e.target.value)}
            />
            {/* Vaccination details */}
           
            </div>

            {/* last */}
            
            <div className='md:w-80 md:space-x-20 md:mt-1 '>
            <h3 className='md:text-center md:ml-8 md:mr-40 '>Time</h3>
            <input
              type=""
              placeholder="Time"
              value={time}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-xl  placeholder-gray-400 focus:outline-none md:mb-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setTime(e.target.value)}
            />
             <h3>Date</h3>
            <input
              type=""
              placeholder="Slot"
              value={slot}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-lg placeholder-gray-400 focus:outline-none md:mb-3  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setSlot(e.target.value)}
            />
            {/* Availability Check */}
            <div className="  mt-5">
            <h1 className='font-bold text-lg md:mb-2'>Availability Check</h1>
            <p className='text-lg md:mb-2'>COVID Vaccine: Covacccin</p>
            <p>
              Status: {isProductAvailable ? <span className='bg-green-700 p-1 mt-5 '>Available</span> : 'Not Available'}
            </p> 
         </div>     
      </div>   
            </div>
           <div className='flex flex-col justify-center items-center'>
           <button   type="submit" className=' bg-pink-400 text-lg shadow-lg md:w-80% p-3 w-30 rounded-sm shadow-pink-500/50 md:ml-102  mt-10 ml-10 py-4 px-40  text-white'>Submit</button>
           {error && <h3 className='text-red-500  ml-20'>something went wrong</h3>}  
           </div>
           <div>
          <h2 className='mt-10   text-2xl font-bold text-center p-5 text-black'>
              Map For Loaction
            </h2>
          </div>
          <div className='bg-white  md:flex md:px[300px] ' >
          
          <img className="  mt-2 md:ml-4 md:w-full  md:h-500  object-cover" src="https://imgs.search.brave.com/qx7Y3H0i0-k3ppbBoGw3s-a06ZRgI3vr6gtEi9GdjpM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bnljLmdvdi9hc3Nl/dHMvaG9tZS9pbWFn/ZXMvcmVzb3VyY2Vz/L255Y21hcHMvQ3Jp/bWUtTWFwLmpwZw"></img>
          <div className='justify-center md:mr-10 md:ml-10  ' >
            <h1 className=' ml-2 md:text-center font-bold text-center mt-3 text-blue-500 text-4xl' >  H-Care Center</h1>
            <div className='text-lg mt-5' >
            <p > Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.</p>
            <p>Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.</p>
            <p>Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.</p>
            <p>Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.</p>
            <p>Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.</p>
            <p>Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.</p>
            <p>Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.</p>
            <p>Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.
            </p>
            <div>
            <button className=' md:ml-40 md:mt-20 text-m bg-blue-400 md:text-lg shadow-lg md:w-80% p-3 w-30 rounded shadow-blue-500/50   mt-10  py-4 px-40  text-white '>Search for the Vaccine and H-Care Center</button>
            </div>
           
            </div>
           
          </div>
          </div>
          </form>
          {/* // work need to done here */}
          <Adminpage formData={formData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default formPage;
