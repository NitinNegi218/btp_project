import { Typography } from '@mui/material';
import React from 'react';


const Table = ({data}) => {
  if (!data) {
    return null; // or return some default content or loading indicator
  }
  return (
   
    <div style={{ display: 'flex', justifyContent: 'center',width:"600px",height:'100%',margin:"15px"}}>
      <div style={{ flex: 1 }}>
        <TiltAngleTable tiltData={data} />
      </div>
    </div>
  );
};

const TiltAngleTable = ({ tiltData }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', margin: '20px auto',maxWidth: '800px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
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