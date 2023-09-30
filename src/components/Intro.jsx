import React from 'react';
import './Intro.css'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="conta">
        <p className='h1'>You are a _______ ?</p>
        <div className='btn'>
          <Link to='/patient'><button className='btn1'>Patient</button></Link>
          <button className='btn2'>Doctor</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
