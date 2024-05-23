import  { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

function Adminpage() {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await Axios.get("http://localhost:5000/api/contacts/getuser");
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
    fetchUserDetails();
  }, [username]);

  return (
    <div>
      <Navbar2 />
      <h2>User Details Page</h2>
      {userDetails ? (
        <div>
          {/* Display user details */}
          <p>Name: {userDetails.name}</p>
          <p>Age: {userDetails.age}</p>
          {/* Display other user details */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
      <Footer />
    </div>
  );
}

export default Adminpage;