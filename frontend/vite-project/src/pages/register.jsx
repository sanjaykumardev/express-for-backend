/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigator = useNavigate();
  const [usertype, setUsertype] = useState('');
  const [Secretkey, useSecretkey] = useState('');

  async function RegisterSubmit(e) {
    if (usertype === 'Admin' && Secretkey !== 'sanjay') {
      navigator('/Adminpage');
      e.preventDefault();
      alert('Invalid Admin');
    } else {
      e.preventDefault();
      console.log(e);
      try {
        const res = await Axios.post("http://localhost:5000/api/users/register", {
          username,
          email,
          password,
          usertype,

        });
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log(res);

        setUsername('');
        setEmail('');
        setPassword('');
        setError(false);
        navigator('/login');
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }
  }

  return (
    <div>
      <Navbar2 />
      <div>
        <img className="  md:h-[45vh]   shadow-black  w-full mt-5 object-cover md:mt-10" src="https://images.pexels.com/photos/15414031/pexels-photo-15414031/free-photo-of-rapeseed-field-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <div className="flex items-center justify-center md:mb-0 h-[80vh] w-full rounded z-index ">
        <div className='flex items-center justify-center flex-col space-y-4 md:w-95 w-80 '>
          <form action="post" onSubmit={(e) => RegisterSubmit(e)}>
            <div className='mt-2 mb-2  '>
              <h1 className='md:text-2xl textlg font-bold text-center'>Create An Account</h1>

              <input
                type="radio"
                name='usertype'
                value='User'
                className='mt-2  mb-2 '
                onChange={(e) => setUsertype(e.target.value)}
              /> User
              <input
                className='mt-7 mb-3 ml-3 mr:10'
                type="radio"
                name='usertype'
                value='Admin'
                onChange={(e) => setUsertype(e.target.value)}
              /> Admin

              {usertype === "Admin" ? (<div>
                <h3 className='mt-7 mb-3 ml-1 mr:10 '>Secret key</h3>
                <input
                  type="text"
                  value={Secretkey}
                  className='p-2 w-80 mb-5  border-2 border-black rounded-lg'
                  placeholder="key"
                  onChange={(e) => useSecretkey(e.target.value)}
                />
              </div>) : null}

              <div>
                <h3 className='font-semibold'>Username</h3>
                <input
                  type="text"
                  value={username}
                  className="border-2 border-black p-2  mb-5 md:w-full w-full rounded-lg z-index-2 "
                  placeholder="Enter your Name"
                  onChange={(e) => setUsername(e.target.value)}
                />

                <h3 className='font-semibold'>Email</h3>
                <input
                  type="email"
                  value={email}
                  className='border-2 border-black  mb-5 p-2 md:w-full w-full rounded-lg z-index-2 '
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h3 className='font-semibold'>Password</h3>
                <input
                  type="password"
                  value={password}
                  className='border-2 border-black p-2  mb-5  md:w-full w-full rounded-lg z-index-2 '
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="bg-indigo-500 shadow-lg md:w-80% p-3 w-80 shadow-indigo-500/50 text-white px-4 py-2 rounded hover:bg-gray-200  mb-3" onClick={RegisterSubmit}>Register</button>
              {error ? <h3 className='text-green-700 '>something wrong </h3> :
                <p ><span className="font-bold mt-4">Already have an Account?</span>  <span className='text-gray-700 pl-2'>Login</span> </p>}
            </div>
          </form>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
