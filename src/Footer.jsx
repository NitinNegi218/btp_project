import React from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled('footer')({
  backgroundColor: '#C7E4EE',
  padding: '40px 0',
  marginTop: 'auto', // Push the footer to the bottom
});


const SocialMediaContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          Connect with Us
        </Typography>
        <SocialMediaContainer>
          <IconButton color="inherit" href="https://www.instagram.com/">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.facebook.com/">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/">
            <TwitterIcon />
          </IconButton>
          {/* Add more social media icons as needed */}
        </SocialMediaContainer>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Solar+. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

