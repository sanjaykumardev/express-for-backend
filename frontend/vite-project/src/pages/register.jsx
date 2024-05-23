/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigator = useNavigate();
  const [usertype, setUsertype] = useState('');
  const [secretkey, setSecretKey] = useState('');

  async function registerSubmit(e) {
    e.preventDefault();
    try {

      if (usertype === 'Admin' && secretkey !== 'Admin007') {
        toast.error("Invalid Admin");
        return;
      }

      const res = await Axios.post("http://localhost:5000/api/users/register", {
        username,
        email,
        password,
        usertype,
        secretkey
      });
      console.log(res);
      localStorage.setItem('usertype', usertype);
      localStorage.setItem('secretkey', secretkey);
      navigator('/');
      setUsername('');
      setEmail('');
      setPassword('');
      setError(false);
      toast.success("Registration Successful");
    } catch (err) {
      setError(true);
      console.log(err);
      toast.error("Registration Failed");
    }
  }

  return (
    <div>
      <Navbar2 />
      <div>
        <img className="md:h-[50vh] shadow-black w-full object-cover" 
        src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?t=st=1716212009~exp=1716215609~hmac=a1340576b39527c2c797176504ee442121e628979a60785249f11e9ad42e6244&w=1380" />
      </div>
      <div className="flex items-center justify-center md:mb-0 h-[80vh] w-full rounded z-index ">
        <div className='flex items-center justify-center flex-col space-y-4 md:w-95 w-80'>
          <form onSubmit={registerSubmit}>
            <div className='mt-2 mb-2'>
              <h1 className='md:text-2xl textlg font-bold text-center'>Create An Account</h1>

              <input
                type="radio"
                name='usertype'
                value='User'
                className='mt-2 mb-2'
                onChange={(e) => setUsertype(e.target.value)}
              /> User
              <input
                className='mt-7 mb-3 ml-3 mr:10'
                type="radio"
                name='usertype'
                value='Admin'
                onChange={(e) => setUsertype(e.target.value)}
              /> Admin

              {usertype === "Admin" && (
                <div>
                  <h3 className='mt-7 mb-3 ml-1 mr:10'>Secret key</h3>
                  <input
                    type="text"
                    value={secretkey}
                    className='p-2 w-80 mb-5 border-2 border-black rounded-lg'
                    placeholder="key"
                    onChange={(e) => setSecretKey(e.target.value)}
                  />
                </div>
              )}

              <div>
                <h3 className='font-semibold'>Username</h3>
                <input
                  type="text"
                  value={username}
                  className="border-2 border-black p-2 mb-5 md:w-full w-full rounded-lg z-index-2"
                  placeholder="Enter your Name"
                  onChange={(e) => setUsername(e.target.value)}
                />

                <h3 className='font-semibold'>Email</h3>
                <input
                  type="email"
                  value={email}
                  className='border-2 border-black mb-5 p-2 md:w-full w-full rounded-lg z-index-2'
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h3 className='font-semibold'>Password</h3>
                <input
                  type="password"
                  value={password}
                  className='border-2 border-black p-2 mb-5 md:w-full w-full rounded-lg z-index-2'
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button 
                className="bg-indigo-500 shadow-lg md:w-80% p-3 w-80 shadow-indigo-500/50 text-white px-4 py-2 rounded hover:bg-gray-200 mb-3" 
              >
                Register
              </button>

              {error ? <h3 className='text-red-700'>Something went wrong</h3> :
                <p><span className="font-bold mt-4">Already have an Account?</span> <span className='text-gray-700 pl-2'>Login</span></p>}
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Register;
