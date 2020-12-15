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
      <h2>The Safest, most Decentralized Filecoin Wrapping Solution on Ethereum</h2>
      <RequestAccess />
    </div>
  )
}
 
export default HomeHero;