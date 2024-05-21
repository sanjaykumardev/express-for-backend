import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"
import { Link } from 'react-router-dom'





const homepages = () => {

  return (
    <>
      <Navbar2 />
      <div>
        {/* head line */}
        <h2 className="p-1 text-center z-index shadow-xl  bg-blue-100 text-s md:text-lg text-black-200">  Need help finding a COVID‑19 vaccine in the U.S.? Call <span className="text-blue-500">1-800-232-0233 (TTY 1-888-720-7489)</span></h2>

        <div className="w-full  z-index md:flex  bg-blue-600 text-white ">
          <div>
            <div className="md:ml-20  flex ">
              <img className="  md:h-[80vh] flex-shrink md:ml-0 h-90 shadow-lg  box-sizing object-cover" src="https://images.pexels.com/photos/2880897/pexels-photo-2880897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            </div>
          </div>
          <div className="md:w-1/2 ml-15 ">
          
            <h2 className="p-5  md:text-7xl text-3xl md:mr-10 md:mt-10  text-center md:text-center ">
              Find a COVID-19 Vaccine Near You
            </h2>
            <p className="mb-5 md:text-3xl md:mb-6  md:mt-34 md:p-3  text-center space-x-2">In light of the ongoing COVID-19 pandemic, it is crucial to stay informed about the latest updates and guidelines provided by health authorities.  Stay vigilant, practice preventive measures, and prioritize the health and well-being of yourself and your community. we can contribute to a safer and healthier environment
              Stay vigilant, practice preventive measures, and prioritize the health and well-being of yourself and your community. we can contribute to a safer and healthier environment.</p>
            <button className=" bg-pink-600 shadow-lg hover:bg-pink-400 hover:text-black hover:font-bold shadow-indigo-500/50 text-white md:mt-10 py-2 rounded mb-5 md:mb-5 md:py-5 px-40 md:px-40 ml-10 mt-2 md:ml-60 ml-50 justify-normal"><Link to="/formpage">Apply Form</Link></button>
          </div>

        </div>

        <div className="bg-white flex mt-10 ml-5 mr-5  md:ml-80 md:mr-60">
          <div >
            <h1 className="font-bold text-blue-900 text-3xl  md:mb-5 ">Updated COVID-19 vaccines are now available for children and adults</h1>
            <p className="text-2xl md:mr-1 mb-2">
              <li>
                Availability will continue to increase, so if you do not find vaccines near you, contact your local pharmacy or health care provider, or check back later. Once you find a location that works for you, please confirm vaccine availability through their site.
              </li>

            </p>
            <li className=" text-2xl mb-2" >  If you have insurance, check with your selected location or your insurer to confirm that COVID-19 vaccine is covered, and the location is in network.</li>
            <li className=" text-2xl mb-2">  If you have health insurance but it  fully cover COVID-19 vaccines, you can find locations that provide free vaccines for adults by narrowing your search to find locations that are part of the Bridge Access Program. Check with your location or insurer to confirm that the location is in network.</li>
            <li className=" text-2xl"> If you have health insurance, you can find locations that provide free vaccines for adults by narrowing your search to find locations that are part of the Bridge Access Program.
            </li>


          </div>
          {/* left */}
          <div className="md:ml-24 ml-5 text-2xl  " >
            <h1 className="font-bold text-blue-900 text-3xl md:mb-5 ">Respiratory syncytial virus (RSV)</h1>
            <p className=" md:mr-10 md:text-2xl md:mb-2 ">
              <li>
                Infants and older adults are more likely to develop severe RSV and need hospitalization. Vaccines are available to protect older adults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV. Talk to your health care provider for information about RSV vaccination and monoclonal antibody products. Learn more about RSV and RSV prevention.
              </li>
              <li>
                If you have health insurance but it does not fully cover COVID-19 vaccines, you can find locations that provide free vaccines for adults by narrowing your search to find locations that are part of the Bridge Access Program. Check with your location or insurer to confirm that the location is in network.
              </li>
            </p>
            <h1 className="font-bold text-blue-900 md:text-3xl md:mt-0 md:mb-2">Search for Flu Vaccine Locations</h1>
            <p className=" md:mr-10 md:text-2xl md:mb-1 ">
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

        <div className=" md:w-full md:h-[80vh] text-lg   md:px-[300px] flex-shrink shadow-lg  flex md:flex mt-4 ">

          <div className=" md:flex  md:justify-center md:items-center md:ml-0  md:space-x-44 md:mt-4  ">
            <div className="  mb-5 px-5 shadow-black" >
              <img className=" md:h-[49vh]  shadow-black  mt-7 md:w-80 md:mt-0" src="https://images.pexels.com/photos/3730990/pexels-photo-3730990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <p className=" md:w-80  bg-white md:p-1">
                Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
              </p>
            </div>

            <div className=" px-5  shadow-black">
              <img className=" md:h-[49vh]   shadow-black  mt-7 md:w-80 md:mt-0" src="https://images.pexels.com/photos/2586344/pexels-photo-2586344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " />
              <p className=" md:w-80 md:p-1 bg-white ">
                Vaccines are available to protect older adults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
              </p>
            </div>

            <div className=" mb-7 md:mb-7 shadow-black px-5">
              <img className="  md:h-[49vh]   shadow-black  md:w-80 mt-7  md:mt-3" src="https://imgs.search.brave.com/UP_jfiCrj9l8wfaScvWokH3wu14-Xtp52Ad9ay0_BB8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpdGVyb29tc3R1/ZGlvLmNvbS5zZy93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDEv/QmlnLUZhbWlseS1Q/aG90b3Nob290LVNp/bmdhcG9yZV8wMDgt/OTc1eDE0NjMuanBn" />
              <p className=" bg-white md:w-80 md:p-1 ">
                Vaccines are available to protect older adults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
              </p>
            </div>
          </div>
        </div>
        {/* contact */}

        <div className="bg-blue-200   md:px-[300px] ">
          <h2 className="text-4xl font-bold md:mt-5   md:mb-30 mb-20 text-center text-black ">CONTACT INFO</h2>
          <div className="">

            <div className="flex flex-col md:flex-row  justify-center items-center">
              <div className="md:w-1/2  ">
                <h3 className="text-3xl font-semibold mb-10 text-start ">COVID‑19 Vaccine Hotline</h3>
                <h1 className="text-2xl mt-5 mb-20  text-start">Help is available in English, Spanish and also many</h1>
                <p className="text-blue-700 mb-10 text-2xl text-start">123 Main Street</p>
                <p className="text-blue-700 mb-10 text-2xl text-start">City, Country</p>
              </div>

              <div className="md:w-1/2 ">
                <h3 className="text-3xl font-semibold mb-10  text-start">Disability Information and Access Line (DIAL)</h3>
                <h1 className="text-2xl mt-5 mb-20  text-start">COVID‑19 vaccination support for people with disabilities.</h1>
                <p className="text-blue-700 mb-10 text-2xl text-start">+1 (123) 456-7890</p>
                <p className="text-blue-700  mb-10 text-2xl text-start">DIAL@n4a.org</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[90vh] h-[130vh] bg-blue-500  w-full md:mt-10">
          <div className="mt-10">
            <h3 className="text-center md:text-4xl text-lg text-white font-semi-bold p-10 w-70 bg-gray-800">SPECILIZED DOCTORS AND FUTURESTIC EQUPIMENT</h3>
          </div>

          <div className=" md:flex space-x-4 md:mt40">

            <div>
              <img className="  md:h-[59vh] md:ml-20 p-2 mb-3 md:mb-10 mr-5 shadow-lg  md:mr-28 mt-5 object-fit " src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div className="md:w-[40%] w-30px h-[80vh]   shadow-lg md:h-[62vh] md:mt-8    bg-white ">
              <h1 className="text-xl font-bold text-center  mt-2">MEDICAL EQUPIMENT</h1>
              <div className="p-3  mt-2 space-y-2">
                <li>
                  Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </li>
                <li>
                  Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </li>
                <li>
                  Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </li>
                <li>
                  Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </li>
                <li>
                  Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </li>
                <li>
                  Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </li>
                <li>
                  Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </li>
                <li>
                  Vaccines are available to protect oldeadults from severe RSV. Monoclonal antibody products are available to protect infants and young children from severe RSV.
                </li>
                <button className="bg-black text-lg  text-white rounded shadow-lg font-bold md:bg-blue-500 p-5 px-20 md:p-5 md:ml-60 md:px-40  ">
                  See List
                </button>
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


