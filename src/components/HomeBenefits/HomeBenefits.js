import React from 'react';

import './HomeBenefits.scss';
import bistrot from './bistrot.png';
import storage from './storage.png';
import lending from './lending.png';

const HomeBenefits = () => {
  return (
    <div className="home-benefits">
      <h3>WFIL Ecosystem</h3>
      <div className="home-benefits-list">
        <div className="home-benefits-item">
          <div className="home-benefits-item-img">
            <img src={bistrot} />
          </div>
          <div className="home-benefits-item-title">WFIL Bistrot</div>
          <p className="home-benefits-item-desc">
            Get WFIL/FIL
          </p>
        </div>
        <div className="home-benefits-item">
          <div className="home-benefits-item-img">
            <img src={lending} />
          </div>
          <div className="home-benefits-item-title">WFIL Lending</div>
          <p className="home-benefits-item-desc">
            Access to Filecoin Liquidity for Miners
          </p>
        </div>
        <div className="home-benefits-item">
          <div className="home-benefits-item-img">
            <img src={storage} />
          </div>
          <div className="home-benefits-item-title">WFIL Storage</div>
          <p className="home-benefits-item-desc">
            Buy Storage on Filecoin
          </p>
        </div>
        
      </div>
    </div>
  )
}
 
export default HomeBenefits;