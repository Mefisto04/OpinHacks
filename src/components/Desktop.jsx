import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Desktop.css'; 

const Desktop = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data from the randomuser.me API
    // axios.get('https://randomuser.me/api/?results=12')
    axios.get('https://randomuser.me/api/?results=12&nat=us&inc=name,picture,location,registered')
      .then((response) => {
        const users = response.data.results;
        setUserData(users);

      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <>
    <div className="card-grid">
      {userData.map((user, index) =>(
          <div className="card" key={index}>
          <img className="avatar" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>{`Experience: ${user.registered.age} years`}</p>
          <p>{`Location: ${user.location.city},India`}</p>
          <Link to="/meet"><button className='book'>Schedule</button>
          </Link>
        </div>
        
      ))}
    </div>
    </>
  );
};

export default Desktop;
