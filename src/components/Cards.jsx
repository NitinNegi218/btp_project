import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const OutlinedCard = () => {
  return (
    <Box >
      <Grid container spacing={2} justifyContent="center" textAlign="center">
        {[0].map((value) => (
          <Grid >
            <Card variant="outlined" >
              <CardContent>
                <Typography variant="h5" component="div">
                  Solar Declination angle
                </Typography>
                <br />
                <Typography variant="body2">
                  The solar declination angle (δ) is the angle between the rays of the sun and the plane of the Earth's equator. It varies throughout the year due to the tilt of the Earth's axis.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Value: 
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Solar Hour angle
                </Typography>
                <br />
                <Typography variant="body2">
                  The Solar Hour Angle (H) is a measure of the time since solar noon, expressed in angular measurement (degrees). It represents the position of the sun in the sky and is used in solar energy calculations.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Value: 
                </Typography>
              </CardContent>
            </Card>
            <Card  variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Azimuth angle
                </Typography>
                <br />
                <Typography variant="body2">
                  The Solar Azimuth Angle (Az) is the compass direction from which the sunlight is coming at any specific point on the earth's surface. It is measured in degrees clockwise from the north.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Value: 
                </Typography>
              </CardContent>
            </Card>
            <Card  variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Tilt angle
                </Typography>
                <br />
                <Typography variant="body2">
                  The tilt angle for solar panels, often referred to as the solar panel tilt or inclination angle, is the angle between the solar panel and the horizontal plane. The optimal tilt angle depends on the geographical location of the solar installation and the specific goals of the system (e.g., maximizing energy production throughout the year or optimizing for a specific season).
                </Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Value: 
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Julian Days
                </Typography>
                <br />
                <Typography variant="body2">
                  The Julian Date (JD) is a continuous count of days since the beginning of the Julian Period on January 1, 4713 BCE.
                </Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Value: 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OutlinedCard;
