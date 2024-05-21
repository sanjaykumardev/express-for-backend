// import React from "react"


function Footer() {
  return (
    <>
<div className=" w-full  bg-gray-800 px-8 md:px-[500px]  md:flex-row  flex-col flex  items-start justify-between sm:text-sm md:text-md py-10 md:text-1xl sm:space-x-0 gap-4">

<div className=" flex flex-col  text-m gap-2 text-white">
<h2 className="text-2xl mb-2"> Contact </h2>  
<p>Fearture vaccnation Details</p>
<p>Most Viewed</p>
<p>Readers Choice</p>
 <p>Provider Resources </p>
 <p>COVID‑19 Vaccine Provider Data </p>
 <p>Flu Vaccine Provider Data </p>
</div>

{/* middle */}

<div className=" flex flex-col  text-m gap-2 text-white ">
  <h2 className="text-2xl  mb-2">Services </h2>
<p>Forum</p>
<p>Support</p>
<p>Recent Posts</p>
 <p>CDC Website Exit Disclaimer</p>
 <p>Nondiscrimination </p>
 <p>Vulnerability Disclosure Policy </p>
 <p>Accessibility Conformance</p>
 <p></p>
</div>

<div className=" flex flex-col text-m gap-2 text-white">
  <h2 className="text-2xl mb-2">
  Support
  </h2>
<p>Privacy Policy</p>
<p>About Us </p>
<p>Terms & Condition</p>
<p>Terms of Service</p>
</div>
</div>
<p className="py-2 pb-2 h-full text-center text-white bg-gray-800">All right reseved @H-Care Center 2024</p>
</>
  )
}

export default Footer