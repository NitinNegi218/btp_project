import { Typography } from '@mui/material';
import React from 'react';

// Import the JSON file
const tiltData = {
  "06:00": "30°",
  "07:00": "45",
  "08:00": "",
  "09:00": "",
  "10:00": "",
  "11:00": "",
  "12:00": "",
  "13:00": "",
  "14:00": "",
  "15:00": "",
  "16:00": "",
  "17:00": "",
  "18:00": ""
};

const Table = () => {
  return (
   
    <div style={{ display: 'flex', justifyContent: 'center' ,width:"100%",padding:"20px",height:'100%',margin:"auto"}}>
      <div style={{ flex: 1 }}>
        <TiltAngleTable tiltData={tiltData} />
      </div>
    </div>
  );
};

const TiltAngleTable = ({ tiltData }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', margin: '20px auto', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <thead style={{ backgroundColor: '#2c3e50', color: '#ecf0f1' }}>
        <tr>
          <th style={{ border: '1px solid #34495e', textAlign: 'left', padding: '12px'}}>
            Time
          </th>
          <th style={{ border: '1px solid #34495e', textAlign: 'left', padding: '12px' }}>
            Tilt Angle
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tiltData).map((time) => (
          <tr key={time} style={{ backgroundColor: '#ecf0f1', borderBottom: '1px solid #34495e' }}>
            <td style={{ border: '1px solid #34495e', textAlign: 'left', padding: '12px' }}>{time}</td>
            <td style={{ border: '1px solid #34495e', textAlign: 'left', padding: '12px' }}>{tiltData[time]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
