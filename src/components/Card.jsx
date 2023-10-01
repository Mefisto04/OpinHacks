import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CardGrid.css'; // Create a CSS file for styling

const CardGrid = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data from the randomuser.me API
    axios.get('https://randomuser.me/api/?results=6')
      .then((response) => {
        const users = response.data.results;
        setUserData(users);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="card-grid">
      {userData.map((user, index) => (
        <div className="card" key={index}>
          <img className="avatar" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>{`Date of Birth: ${new Date(user.dob.date).toLocaleDateString()}`}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
