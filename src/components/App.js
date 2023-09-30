import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
  }
  const handleSubmit = (e) => {
    alert("Hello");
  }
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Store the selected image file in a constant
      setSelectedImage(file);
    }
  };
  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <form onSubmit={handleSubmit}>
            <div className="rectangle" />
            <div className="text-wrapper">Please fill the details</div>
            <div className="group-2">
              <div className="text-wrapper-2">Enter your name</div>
              <div className="">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rectangle-2"
                />
              </div>
            </div>
            <div className="group-3">
              <div className="text-wrapper-3">Choose your gender</div>

              <div className="group-4">
                <input
                  className="ellipse-4"
                  type="radio"
                  name="patientGender"
                  id='female'
                  value="Female"
                  onChange={handleChange}
                  checked={gender === 'Female'} />
                <label htmlFor="age-range-1" className="text-wrapper-4">Female</label>
              </div>

              <div className="group-5">
                <input
                  className="ellipse-4"
                  type="radio"
                  name="PatientGender"
                  id='male'
                  value="Male"
                  onChange={handleChange}
                  checked={gender === 'Male'} />
                <label htmlFor="gender-range-1" className="text-wrapper-4">Male</label>
              </div>

              <div className="group-6">
                <input
                  className="ellipse-4"
                  type="radio"
                  name="patientGender"
                  id='others'
                  value="Others"
                  onChange={handleChange}
                  checked={gender === 'Others'} />
                <label htmlFor="gender-range-1" className="text-wrapper-4">Others</label>
              </div>

            </div>
            <div className="group-7">
              <div className="text-wrapper-2">Enter your age</div>
              <div className="">
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="rectangle-2"
                />
              </div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-2">Enter your number</div>
              <div className="">
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="rectangle-2"
                />
              </div>
            </div>
            <div className="group-9">
              <h1 className="text-wrapper-5">Image Uploader</h1>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <Link to='/desktop'>
              <button type='submit' className="submit">Submit</button> </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
