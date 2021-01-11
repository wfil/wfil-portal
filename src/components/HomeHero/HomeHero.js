import React from 'react';

import Logo from '../Logo';
import RequestAccess from '../RequestAccess';

import './HomeHero.scss';

const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="logo-bg">
        <Logo size="400%" />
      </div>
      <h1>Wrapped Filecoin <span className="blue">(WFIL)</span></h1>
      <p>powered by WFIL Labs</p>
      <h2>The Most Decentralized Filecoin Wrapping Solution on Ethereum</h2>
      <RequestAccess />
    </div>
  )
}
 
export default HomeHero;