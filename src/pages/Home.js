import React from 'react';

import Layout from '../components/layout/Layout';

const var1 = process.env.REACT_APP_VARIABLE1;

const Home = () => {
  return (
    <Layout>
      <div>Home page: {var1}</div>
    </Layout>
  );
}
 
export default Home;
