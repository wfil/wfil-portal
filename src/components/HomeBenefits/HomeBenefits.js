import React from 'react';

import './HomeBenefits.scss';

const HomeBenefits = () => {
  return (
    <div className="home-benefits">
      <h3>Benefits</h3>
      <div className="home-benefits-list">
        <div className="home-benefits-item">
          <div className="home-benefits-item-title">Filecoin right into DeFi</div>
          <p className="home-benefits-item-desc">
            Access to the whole world of DeFi tools and platforms without having to sell your Filecoin.
          </p>
        </div>
        <div className="home-benefits-item">
          <div className="home-benefits-item-title">Access storage directly<br/>from Ethereum</div>
          <p className="home-benefits-item-desc">
            Buy storage, save files, and interact with the Filecoin ecosystem from your Ethereum dapps.
          </p>
        </div>
      </div>
    </div>
  )
}
 
export default HomeBenefits;