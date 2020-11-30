import React from 'react';

import HomeHero from '../components/HomeHero';
import HomeBenefits from '../components/HomeBenefits';
import HomePartners from '../components/HomePartners';
import HomeContact from '../components/HomeContact';
import Layout from '../components/layout/Layout';

const var1 = process.env.REACT_APP_VARIABLE1;

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeBenefits />
      <HomePartners />
      <HomeContact />
    </Layout>
  );
}
 
export default Home;
