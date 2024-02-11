import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
 const navigator = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log(isLoggedIn);
    setIsLoggedIn(false);
    navigator('/');
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto md:mt-2 md:mb-2 flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold">
          COVID-19
        </Link>

        <div className="hidden md:flex space-x-12 ml-20">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-red-500 shadow-lg shadow-red-500/50 text-white px-4 py-2 rounded">
              Logout
           <Link to='/'></Link> </button>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white px-4 py-2 rounded">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          {/* Mobile menu toggle button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
