import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  minHeight: 200,
  padding: 2,
  margin: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'box-shadow 0.3s ease',
  marginBottom: '10px',
  marginTop:'20px',
  backgroundColor: '#99d8e7',

  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
  },
});


const OutlinedCard = () => {
  return (
    <Box >
      <Grid container spacing={2} justifyContent="center" textAlign="center" display="flex">
        {[0].map((value) => (
          <Grid item key={value} xs={12} md={4} lg={10}>
            <StyledCard variant="outlined" >
              <CardContent>
                <Typography variant="h5" component="div">
                  Solar Declination angle
                </Typography>
                <br />
                <Typography variant="body2">
                  The solar declination angle (δ) is the angle between the rays of the sun and the plane of the Earth's equator. It varies throughout the year due to the tilt of the Earth's axis.
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Solar Hour angle
                </Typography>
                <br />
                <Typography variant="body2">
                  The Solar Hour Angle (H) is a measure of the time since solar noon, expressed in angular measurement (degrees). It represents the position of the sun in the sky and is used in solar energy calculations.
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard  variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Azimuth angle
                </Typography>
                <br />
                <Typography variant="body2">
                  The Solar Azimuth Angle (Az) is the compass direction from which the sunlight is coming at any specific point on the earth's surface. It is measured in degrees clockwise from the north.
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard  variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Tilt angle
                </Typography>
                <br />
                <Typography variant="body2">
                  The tilt angle for solar panels, often referred to as the solar panel tilt or inclination angle, is the angle between the solar panel and the horizontal plane. The optimal tilt angle depends on the geographical location of the solar installation and the specific goals of the system (e.g., maximizing energy production throughout the year or optimizing for a specific season).
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Julian Days
                </Typography>
                <br />
                <Typography variant="body2">
                  The Julian Date (JD) is a continuous count of days since the beginning of the Julian Period on January 1, 4713 BCE.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OutlinedCard;
