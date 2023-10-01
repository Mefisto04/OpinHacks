import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Meet.css'; 
import { Link } from 'react-router-dom';

const Meet = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      console.log('Scheduled for:', selectedDate, selectedTime);
    } else {
      alert('Please select a date and time.');
    }
  };

  return (
    <div className="meet">
    <div className="schedule-call-box">
      <h2 className='h2'>Schedule a Call</h2>
      <div className="input-container">
        <label>Select Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          isClearable
        />
      </div>
      <div className="input-container">
        <label>Select Time: </label>
        <select value={selectedTime} onChange={handleTimeChange}>
          <option value="">Select a time</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
      <Link to='/payment'>
      <button className='botn'>Schedule</button></Link>
    </div>
    </div>
  );
};

export default Meet;
