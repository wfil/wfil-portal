import React from 'react';

import Logo from '../Logo';

import './HomeHero.scss';

const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="logo-bg">
        <Logo size="400%" />
      </div>
      <h1>Wrapped Filecoin (WFIL)</h1>
      <h2>The First Filecoin Wrapped Token on Ethereum</h2>
    </div>
  )
}
 
export default HomeHero;