/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
import Navbar2 from "../components/Navbar2"
import Footer from '../components/Footer'



function login() {
  
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(false)
  const navigator = useNavigate()


  const [token, setToken] = useState(localStorage.getItem('token'));
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("good");
    try {
      const res = await Axios.post("http://localhost:5000/api/users/login", { email, password, })
      const newToken = res.data.accesstoken;
      setToken(newToken);
      localStorage.setItem('token', newToken);
      console.log('Axios Error:', res);
      setEmail(" ");
      setPassword(" ");
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigator("/home");
    } catch (error) {
      setError(true);
        console.error('Login failed:', error);
    }
  }


  return (
    <>
      <Navbar2 />
      <div>
        <img className="  md:h-[50vh]   shadow-black  w-full  object-scale-up object-cover " src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?t=st=1716212009~exp=1716215609~hmac=a1340576b39527c2c797176504ee442121e628979a60785249f11e9ad42e6244&w=1380" />
      </div>
      <div className='w-full flex justify-center items-center h-[60vh]'>
        <div className='flex flex-coljustify-center items-center rounder-lg space-y-2 w-[80%] md:w-[25%] '>
          <div className='md:mr-20'>
            <h1 className=" font-bold md:ml-40  mt-7 mb-4 md:mb-7 text-2xl text-center md:text-1xl gap-3">Login To Account </h1>
            <form className=' ml-5 md:mr-5' onSubmit={(e) => handleSubmit(e)}>


              <div className=' '>

              <h3 className='md:ml-20 mb-3 md:mb-3 text-lg font-bold'>Email</h3>
              <input 
                type="email"
                placeholder="Email"
                value={email}
                className='p-2 w-full mb-4  md:ml-20 border-2 border-black rounded-lg '
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className='md:ml-20  mb-2 md:mb-3 text-lg font-bold '>Password</h3>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className='p-2 w-full mb-10 md:ml-20 border-2 border-black rounded-lg'
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className='md:w-full w-80 md:ml-20 bg-blue-500 shadow-lg shadow-blue-500/50 ml-10 text-white px-4 py-2 rounded hover:bg-black-200 shadow-white-500/50 font-bold  text-lg '
               >Login</button>

              <p className='mt-5 md:mb-7 md:ml-20'><span className="font-bold ">Create New here?</span> <span className="cursor-pointer text-gray-700 pl-2" ><Link to='/Register'>Register</Link> </span></p>
              {error && <h3 className='text-red-500 mb-10   ml-20 text-center'>something went wrong</h3>}
              </div>
            </form>
          </div>


        </div>


      </div>
      <Footer />
    </>
  );
}

export default login;
