import React from 'react';
import "./HomeScreen.css"
import HomeBanner from './homeBanner/HomeBanner';
import HomeDetails from './homeDetails/HomeDetails';
import Footer from '../../footer/Footer';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <HomeBanner />
      <HomeDetails />
      <Footer />


    </div>
  )
}

export default HomeScreen
