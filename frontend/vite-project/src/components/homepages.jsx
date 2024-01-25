import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"
import React from 'react'
import { Link } from 'react-router-dom'
// import { IoCallSharp } from "react-icons/io5";




const homepages = () => {
  return (
    <>
      <Navbar2 />
      <div>
        {/* head line */}
               <h2 className="p-1 text-center z-index shadow-xl  bg-blue-100 text-s md:text-lg text-black-200">  Need help finding a COVID‑19 vaccine in the U.S.? Call <span className="text-blue-500">1-800-232-0233 (TTY 1-888-720-7489)</span></h2>
                            
               <div className="w-full  z-index md:flex  bg-blue-600 text-white ">
              <div>
                 <div className="md:ml-60  flex "> 
                    <img className="  md:h-[60vh] flex-shrink  h-90 shadow-lg  box-sizing object-cover" src="https://images.pexels.com/photos/2880897/pexels-photo-2880897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                </div>
              </div>
              <div className="md:w-1/2 ml-3 ">
              <h2 className="p-5  md:mb-1 md:text-6xl text-2xl md:mr-44 md:mt-10 md:text-center ">
                Find a COVID-19 Vaccine near You
              </h2>
              <p className="md:mr-44 md:text-lg md:mb-6  md:mt-10 md:p-3 md:ml-4  text-center space-x-2">In light of the ongoing COVID-19 pandemic, it is crucial to stay informed about the latest updates and guidelines provided by health authorities.  Stay vigilant, practice preventive measures, and prioritize the health and well-being of yourself and your community. we can contribute to a safer and healthier environment.</p>
              <button className=" bg-pink-600 shadow-lg hover:bg-pink-400 hover:text-black hover:font-bold shadow-indigo-500/50 text-white px-4 py-2 rounded mb-2 md:mb-5 md:py-3 md:px-20 ml-40 mt-2 md:ml-60 ml-50 justify-normal"><Link to="/formpage">Apply Form</Link></button>
              </div>
              
            </div>

            <div className="bg-white flex mt-10 ml-5 mr-5  md:ml-80 md:mr-60">
              <div >
                <h1 className="font-bold text-blue-900 text-2xl  md:mb-5 ">Updated COVID-19 vaccines are now available for children and adults</h1>
                <p className="text-xl md:mr-1 mb-2">
                  <li>
                  Availability will continue to increase, so if you don't find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.
                  </li>
              
                </p>
               <li className=" text-xl mb-2" >  If you have insurance, check with your selected location or your insurer to confirm that COVID-19 vaccine is covered, and the location is in network.</li> 
               <li className=" text-xl mb-2">  If you have health insurance but it doesn't fully cover COVID-19 vaccines, you can find locations that provide free vaccines for adults by narrowing your search to find locations that are part of the Bridge Access Program. Check with your location or insurer to confirm that the location is in network.</li> 
               <li className=" text-xl"> If you don't have health insurance, you can find locations that provide free vaccines for adults by narrowing your search to find locations that are part of the Bridge Access Program. 
                </li> 
             
              
              </div>
              {/* left */}
              <div className="md:ml-24 ml-5 text-xl  " >
                <h1 className="font-bold text-blue-900 text-2xl md:mb-5 ">Respiratory syncytial virus (RSV)</h1>
                <p className=" md:mr-10 md:text-xl md:mb-2 ">
                  <li>
                  Infants and older adults are more likely to develop severe RSV and need hospitalization. Vaccines are available to protect older adults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV. Talk to your health care provider for information about RSV vaccination and monoclonal antibody products. Learn more about RSV and RSV prevention.
                 </li>
                 <li>
                 If you have health insurance but it doesn't fully cover COVID-19 vaccines, you can find locations that provide free vaccines for adults by narrowing your search to find locations that are part of the Bridge Access Program. Check with your location or insurer to confirm that the location is in network.
                 </li>
                    </p>
                <h1 className="font-bold text-blue-900 md:text-2xl md:mt-2 md:mb-5">Search for Flu Vaccine Locations</h1>
                <p>
               <li>
               he first and most important step to protect yourself against flu viruses is to get a flu vaccine. You can get a flu vaccine at the same time as a COVID-19 vaccine.
                </li>
                <li>
                Find your flu vaccine Talk to your health care provider for information about RSV vaccination and monoclonal antibody products. Learn more about RSV and RSV prevention Infants and older adults are more likely to develop severe RSV and need hospitalization.
                  </li> 
                  <li>
                  Vaccines are available to protect older adults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                    </li>  
                </p>
              </div>
            </div>
              
              {/* // photo to COVID-19 */}

            <div className=" md:w-full md:h-[80vh] text-lg   md:px-[300px] flex-shrink shadow-lg  flex md:flex mt-4 bg-blue-500"> 
            
            <div className=" md:flex  md:justify-center md:items-center  md:space-x-44 md:mt-4  ">
            <div className="  mb-5 px-5 shadow-black" >
              <img  className=" md:h-[49vh]  shadow-black  mt-7 md:w-80 md:mt-0" src="https://images.pexels.com/photos/3730990/pexels-photo-3730990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
              <p className=" md:w-80  bg-white md:p-1">
              Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
              </p>
              </div>
              
              <div className=" px-5  shadow-black">
                <img  className=" md:h-[49vh]   shadow-black  mt-7 md:w-80 md:mt-0" src="https://images.pexels.com/photos/2586344/pexels-photo-2586344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "/>
                <p className=" md:w-80 md:p-1 bg-white ">
                Vaccines are available to protect older adults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </p>
              </div>

               <div className=" mb-7 md:mb-7 shadow-black px-5">
               <img  className="  md:h-[49vh]   shadow-black  md:w-80 mt-7  md:mt-3" src="https://imgs.search.brave.com/UP_jfiCrj9l8wfaScvWokH3wu14-Xtp52Ad9ay0_BB8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpdGVyb29tc3R1/ZGlvLmNvbS5zZy93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDEv/QmlnLUZhbWlseS1Q/aG90b3Nob290LVNp/bmdhcG9yZV8wMDgt/OTc1eDE0NjMuanBn"  />
              <p className=" bg-white md:w-80 md:p-1 ">
              Vaccines are available to protect older adults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
              </p>
               </div>
            </div>
            </div>
             {/* contact */}
            
             <div className="bg-blue-200  md:px-[300px] ">
                <div className="container mx-auto  text-center">
                  
                  <h2 className="text-4xl font-bold   mb-20 text-blue-500 ">CONTACT</h2>
                
                 
                  
                  <div className="flex flex-col md:flex-row  justify-center items-center">
                    <div className="md:w-1/2  ">
                      <h3 className="text-3xl font-semibold mb-10 text-start ">COVID‑19 Vaccine Hotline</h3>
                      <h1 className="text-2xl mt-5 mb-10  text-start">Help is available in English, Spanish and also many</h1>
                      <p className="text-blue-700 mb-10 text-2xl text-start">123 Main Street</p>
                      <p className="text-blue-700 mb-10 text-2xl text-start">City, Country</p>
                    </div>

                    <div className="md:w-1/2  ">
                      <h3 className="text-3xl font-semibold mb-10  text-start">Disability Information and Access Line (DIAL)</h3>
                      <h1  className="text-2xl mt-5 mb-10  text-start">COVID‑19 vaccination support for people with disabilities.</h1>
                      <p className="text-blue-700 mb-10 text-2xl text-start">+1 (123) 456-7890</p>
                      <p className="text-blue-700  mb-10 text-2xl text-start">DIAL@n4a.org</p>
                    </div>
                  
                      
                  
                  </div>
                </div>
              </div>
       </div>
      <Footer />
    </>
  )
}

export default homepages


{/* <div className="md:w-200px md:ml-80 md:mr-80 mt-4 stritch md:h-[400px] h-100px md:flex md:justify-center md:items-center   ">
        
{/* <img className=" md:w-250px  w-250px h-500px md:h-[100%] object-cover" src="https://imgs.search.brave.com/r0jWbFtUtx-azgHd8lhdtO0ulKMoEtVrcLV9fEnyo7Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5kcmVhc29sbGVu/YmVyZ2VyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/NC9Nb20tRGFkLWFu/ZC1naXJscy1sb3Zl/LWJpZy1mYW1pbHkt/aHVnLTEwMjR4Njgz/LmpwZw"></img>
 */}
  //  </div>    */}
  // <div className="w-300px md:w-500px  flex md:space-x-0 space-x-2 flex-shrink" > </div>  
  // <span className="text-lg   font-bold text-red-600">*</span>

  

{/* <div className="    ">
<h1 className="md:text-5xl ml-2 text-3xl text-center  mt-2 md:mt-5 text-blue-500  border-b-4 border-red-500 inline ">CONTACT</h1>
</div> 
{/* right */}
{/* <div  className="md:flex-col ">
<div className="text-3xl  border-red-500 inline  text-black-500  border-b-2">  
      <h2>Get Help</h2>
  </div>
 
</div>

{/* //left */}
{/* <div className="">
<div className="">
    <h1>Disability Information and Access Line (DIAL)</h1>
    <p>COVID‑19 vaccination support for people with disabilities.</p>
  </div>
</div>  */} 

{/* <div className="md:w-full flex md:px-[400px] shadow-black">
<div className="flex flex-wrap">
 <div className="w-1/2 p-4">
 <h1 className="md:text-5xl ml-2 text-3xl text-center  mt-2 md:mt-5 text-blue-500  border-b-4 border-red-500 inline ">CONTACT</h1>
 </div>
 <div className="w-1/2 p-4">Item 2</div>
 <div className="w-1/2 p-4">Item 3</div>
 <div className="w-1/2 p-4">Item 4</div>
</div>

 
</div> */}
