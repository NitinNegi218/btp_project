import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Map from '../Map'
import Table from "../Table"

function Home() {
  return (
    <>
      <HeroSection />
      <div style={{display:"flex"}}>
      <Map/>
      <Table/>
      </div>
     
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
