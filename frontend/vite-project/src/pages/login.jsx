import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
import { URL } from '../url'
import Navbar2 from "../components/Navbar2"
import Footer from '../components/Footer'
// import { validEmail, validPassword } from '../components/validation';



function login() {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(false)
  // const [emailErr, setEmailErr] = useState(false);
  // const [pwdError, setPwdError] = useState(false);
  const navigator = useNavigate()


  const [token, setToken] = useState(localStorage.getItem('token'));
  const handleSubmit = async (e) => {


    e.preventDefault();
    console.log("good", e);
    try {
      const res = await Axios.post("http://localhost:3000/api/users/login", { email, password, })
      const newToken = res.data.accesstoken;
      setToken(newToken);
      localStorage.setItem('token', newToken);
      console.log('Axios Error:', res);
      setEmail(" ");
      setPassword(" ");

      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      // setEmailErr(false)
      navigator("/")




    } catch (error) {
      setError(true)
        +
        console.error('Login failed:', error);
    }


  }


  return (
    <>
      <Navbar2 />
      <div>
        <img className="  md:h-[45vh]   shadow-black  w-full mt-5 object-cover md:mt-10" src="https://images.pexels.com/photos/15414031/pexels-photo-15414031/free-photo-of-rapeseed-field-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>

      <div className='w-full flex justify-center items-center  h-[80vh]'>
        <div className='flex flex-coljustify-center items-center space-y-2 w-[80%] md:w-[25%] '>
          <div className='md:mr-20'>
            <h1 className=" font-bold md:ml-20 mt-7 md:mb-7 text-center md:text-2xl gap-3">Login To Your Account</h1>
            <form className=' ml-5 md:mr-5' onSubmit={(e) => handleSubmit(e)}>



              <h3 className='md:ml-20 mb-3 md:mb-3 text-lg font-bold'>Email</h3>
              <input
                type="email"
                placeholder="Email"
                value={email}
                className='p-2 w-80 mb-4  md:ml-20 border-2 border-black rounded-lg '
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className='md:ml-20  mb-2 md:mb-3 text-lg font-bold '>Password</h3>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className='p-2 w-80 mb-10 md:ml-20 border-2 border-black rounded-lg'
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className='md:w-80 w-80 md:ml-20  bg-black p-3 hover:bg-black-200  shadow-lg shadow-white-500/50 text-white px-4 py-2 rounded font-bold  text-lg '
                onClick={handleSubmit}>Login</button>

              <p className='mt-2 md:mb-7 md:ml-20'><span className="font-bold ">Create New here?</span> <span className="cursor-pointer text-gray-700 pl-2" ><Link to='/Register'>Register</Link> </span></p>
              {error && <h3 className='text-red-500 mb-10   ml-20 text-center'>something went wrong</h3>}
            </form>
          </div>


        </div>


      </div>
      <Footer />
    </>
  );
};

export default login;
