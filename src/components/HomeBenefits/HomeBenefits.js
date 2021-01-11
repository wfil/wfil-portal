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
          <a href="https://bistrot.wfil.network/" target="_blank" rel="noopener noreferrer">
            <div className="home-benefits-item-img">
              <img src={bistrot} />
            </div>
            <div className="home-benefits-item-title">WFIL Bistrot</div>
          </a>
          <p className="home-benefits-item-desc">
            Get WFIL/FIL
          </p>
        </div>
        <div className="home-benefits-item">
          <a href="#" rel="noopener noreferrer">
            <div className="home-benefits-item-img">
              <img src={lending} />
            </div>
            <div className="home-benefits-item-title">WFIL Lending</div>
          </a>
          <p className="home-benefits-item-desc">
            Access to Filecoin Liquidity for Miners
          </p>
        </div>
        <div className="home-benefits-item">
          <a href="https://storage.wfil.network/" target="_blank" rel="noopener noreferrer">
            <div className="home-benefits-item-img">
              <img src={storage} />
            </div>
            <div className="home-benefits-item-title">WFIL Storage</div>
          </a>
          <p className="home-benefits-item-desc">
            Buy Storage on Filecoin
          </p>
        </div>
        
      </div>
    </div>
  )
}
 
export default HomeBenefits;