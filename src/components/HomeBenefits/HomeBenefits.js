import React from 'react';

import './HomeBenefits.scss';

const HomeBenefits = () => {
  return (
    <div className="home-benefits">
      <h3>WFIL Ecosystem</h3>
      <div className="home-benefits-list">
        <div className="home-benefits-item">
          <div className="home-benefits-item-title">WFIL Bistrot</div>
          <p className="home-benefits-item-desc">
            Get WFIL/FIL
          </p>
        </div>
        <div className="home-benefits-item">
          <div className="home-benefits-item-title">WFIL Storage</div>
          <p className="home-benefits-item-desc">
            Buy Storage on Filecoin with WFIL
          </p>
        </div>
        <div className="home-benefits-item">
          <div className="home-benefits-item-title">WFIL Lending</div>
          <p className="home-benefits-item-desc">
            Access to Filecoin Liquidity for Miners via WFIL
          </p>
        </div>
      </div>
    </div>
  )
}
 
export default HomeBenefits;