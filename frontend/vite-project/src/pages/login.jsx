import { useState ,useEffect } from 'react'
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
    console.log("good",e);
    try {
    const res = await Axios.post("http://localhost:3000/api/users/login", { email, password })
    const newToken = res.data.accesstoken;
    setToken(newToken);
    localStorage.setItem('token', newToken);


      console.log('Axios Error:',res);



      setEmail(" ");
      setPassword(" ");
     
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigator ( "/")


 
    
    } catch (error) {
      setError(true)
      console.error('Login failed:', error);
    }
  };
 

  return (
    <>
    <Navbar2/>
      
    <div className='w-full flex justify-center items-center  h-[80vh]'>
    
        <div className='flex flex-col justify-center items-center space-y-6 w-[80%] md:w-[25%] '>
        <h1 className=" font-bold ml-2 text-center md:text-1xl gap-3">Log in to Your Account</h1>
      <form className=' ml-10 md:ml-5' onSubmit={(e)=> handleSubmit(e)}>

      <h3 className='md:ml-20 font-bold'>Email</h3>
      <input
            type="email"
            placeholder="Email"
            value={email}
            className='p-2 w-80 mb-10  md:ml-20 border-2 border-black rounded-lg '
            onChange={(e) => setEmail(e.target.value)}
         />
         <h3 className='md:ml-20 font-bold'>Password</h3>
         <input
            type="password"
            placeholder="Password"
            value={password}
            className='p-2 w-80 mb-10 md:ml-20 border-2 border-black rounded-lg'
            onChange={(e) => setPassword(e.target.value)}
         />
     
            <button className='md:w-80 w-80 md:ml-20 bg-blue-500 p-3 hover:bg-gray-200 "bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-4 py-2 rounded font-bold  text-lg '
             onClick={handleSubmit}><Link to='/formpage'></Link>Login</button>
            {error && <h3 className='text-red-500  ml-20'>something went wrong</h3>}  
                         <p className='mt-2 md:ml-20'><span className="font-bold ">Create New here?</span> <span  className="cursor-pointer text-gray-700 pl-2" ><Link to='/Register'>Register</Link> </span></p>
      </form>
      </div> 

    

  </div>
<Footer/>
</>
  );
};

export default login;
