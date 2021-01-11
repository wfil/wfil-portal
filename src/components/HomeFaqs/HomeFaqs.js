import React from 'react';

import './HomeFaqs.scss';

const HomeFaqs = () => {
  return (
    <div className="home-faqs">
      <h3>Vision</h3>
      <p className="home-faqs-item-desc">
        WFIL Labs is an open-source R&amp;D Lab. We built WFIL to bootstrap Filecoin adoption and development, unleashing the next generation of storage and financial applications.
        <br/>
        <br/>
        <br/>
        <span>
          Read the full article on&nbsp;
          <a href="https://medium.com/wfil/wfil-wfil-labs-vision-fe4680906161" target="_blank" rel="noopener noreferrer">Medium</a>
        </span>
      </p>
      {/* <div className="home-faqs-list">
        <div className="home-faqs-item">
          <div className="home-faqs-item-title">What is WFIL?</div>
          <p className="home-faqs-item-desc">
            WFIL is the first ERC20 token representing Filecoin in the Ethereum network.
          </p>
        </div>
        <div className="home-faqs-item">
          <div className="home-faqs-item-title">I already own Filecoin, why would I need WFIL?</div>
          <p className="home-faqs-item-desc">
            Filecoin and Ethereum blockchains are totally different protocols and they don't communicate with each other. Wrapping Filecoin into WFIL allows you to use it in all the Ethereum ecosystem.
          </p>
        </div>
        <div className="home-faqs-item">
          <div className="home-faqs-item-title">How does it work?</div>
          <p className="home-faqs-item-desc">
            Everytime our protocol receives Filecoin it mints the exact amount in WFIL and when anyone burns WFIL, the protocol sends back the exact amount of FIL. All the time, WFIL/FIL ratio remains 1 to 1.
          </p>
        </div>
        <div className="home-faqs-item">
          <div className="home-faqs-item-title">Is it safe?</div>
          <p className="home-faqs-item-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div> */}
    </div>
  )
}
 
export default HomeFaqs;