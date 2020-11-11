import React from 'react';

import uniswap from './uniswap.png'
import protocol from './protocol-labs.png'
import filecoin from './filecoin.png'
import consensysLabs from './consensys-labs.png'
import './HomePartners.scss';

const HomePartners = () => {
  return (
    <div className="home-partners">
      <h3>Partners</h3>
      <div className="home-partners-logos">
        <div className="home-partners-logos-row">
          <div className="home-partners-logos-item">
            <img src={consensysLabs}/>
          </div>
          <div className="home-partners-logos-item">
            <img src={protocol}/>
          </div>
          <div className="home-partners-logos-item logo-auto">
            <img src={filecoin}/>
          </div>
          <div className="home-partners-logos-item">
            <img src={uniswap}/>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default HomePartners;