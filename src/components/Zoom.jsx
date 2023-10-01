import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// gkc5pfJhQwSHHJxwqykvig
// KJbHudP647prNWCu2DW1EQYTXXBC44yt

const Zoom = () => {
  const [meetings, setMeetings] = useState([]);
  const [meetingTopic, setMeetingTopic] = useState('');

  useEffect(() => {
    axios
      .get('https://api.zoom.us/v2/users/me/meetings', {
        headers: {
          Authorization: `Bearer YOUR_OAUTH_ACCESS_TOKEN`,
        },
      })
      .then((response) => {
        setMeetings(response.data.meetings);
      })
      .catch((error) => {
        console.error('Error fetching Zoom meetings:', error);
      });
  }, []);

  const createMeeting = () => {
    axios
      .post(
        'https://api.zoom.us/v2/users/me/meetings',
        {
          topic: meetingTopic,
          type: 2, // 2 indicates a scheduled meeting
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OAUTH_ACCESS_TOKEN`,
          },
        }
      )
      .then((response) => {
        console.log('Meeting created:', response.data);
        // Refresh the list of meetings
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error creating Zoom meeting:', error);
      });
  };

  return (
    <div>
      <h1>Zoom Meetings</h1>
      <div>
        <h2>Create a Meeting</h2>
        <input
          type="text"
          placeholder="Meeting Topic"
          value={meetingTopic}
          onChange={(e) => setMeetingTopic(e.target.value)}
        />
        <button onClick={createMeeting}>Create Meeting</button>
      </div>
      <div>
        <h2>Meetings List</h2>
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>{meeting.topic}</li>
          ))}
        </ul>
      </div>
      <Link to="/auth">Authenticate with Zoom</Link>
    </div>
  );
};

export default Zoom;
