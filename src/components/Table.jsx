import React from 'react';

const TiltAngleTable = () => {
  // Replace tilt angle values accordingly
  const tiltData = [
    { time: '00:00', angle: '30°' },
    { time: '01:00', angle: '35°' },
    { time: '02:00', angle: '40°' },
    // Add more rows as needed
    { time: '23:00', angle: '25°' },
    { time: '24:00', angle: '28°' },
  ];

  return (
    <table style={{ borderCollapse: 'collapse', width: '30%', margin: '20px auto' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>
            Time
          </th>
          <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>
            Tilt Angle
          </th>
        </tr>
      </thead>
      <tbody>
        {tiltData.map((row, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{row.time}</td>
            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{row.angle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TiltAngleTable;
