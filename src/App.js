import { useState } from 'react';
import './App.css';
import * as React from 'react';
// import ReactDOM from 'react-dom/client';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  }

  return (
    <>
      <div className='container'>
        <div className='div1'>
          <form>
            <div className='name'>
              <label>Enter your name :
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='age'>
              <label>Your Age :
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
                <legend>Select your age :</legend>

                <input
                  type="radio"
                  name="age"
                  id='age-range-1'
                  value="Female"
                  onChange={handleChange}
                  checked={age === 'Female'} />
                <label htmlFor="age-range-1">Female</label>

                <input
                  type="radio"
                  name="age"
                  id='age-range-2'
                  value="Male"
                  onChange={handleChange}
                  checked={age === 'Male'} />
                <label htmlFor="age-range-2">Male</label>

                <input
                  type="radio"
                  name="age"
                  id='age-range-2'
                  value="Others"
                  onChange={handleChange}
                  checked={age === 'Others'} />
                <label htmlFor="age-range-2">Others</label>

            </div>
          </form>
          <p>{name}</p>

        </div>
      </div>
    </>
  )
}

export default App;
