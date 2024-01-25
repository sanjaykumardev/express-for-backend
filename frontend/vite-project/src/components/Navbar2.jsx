import { Link } from 'react-router-dom'
// import { BsSearch } from 'react-icons/bs'
// import {FaBars} from 'react-icons/fa'
import {  useState } from 'react'
// import Menu from './Menu'
// import { UserContext } from '../context/UserContext'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
   <nav className="bg-gray-800 p-4 shadow-lg ">
      <div className="container mx-auto md:mt-2 md:mb-2 flex justify-between items-center">
        {/* Logo or Brand */}
        <Link to="/" className="text-white text-xl font-bold">
       COVID-19
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 ml-20">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white ">
            About
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>

        {/* Auth Links */}
        <div className="flex space-x-4">
          <Link to="/login" >
          <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-4 py-2 rounded"> 
            Login
            </button>
          </Link>
          <Link to="/register">
          <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white px-4 py-2 rounded ">
              Register
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      
      </div>
     
    </nav>
    
    </>
  );
};

export default Navbar
