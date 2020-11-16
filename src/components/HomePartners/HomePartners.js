import React from 'react';

import codefi from './codefi.png'
import uniswap from './uniswap.png'
import protocol from './protocol-labs.png'
import filecoin from './filecoin.png'
import consensysLabs from './consensys-labs.png'
import textile from './textile.png'
import './HomePartners.scss';

const PARTNERS = [
  [
    { img: consensysLabs, url: 'https://labs.mesh.xyz/tachyon/', style: { padding: '30px' }  },
    { img: protocol, url: 'https://protocol.ai', style: { flex: '0 0 22%' }},
    { img: filecoin, url: 'https://filecoin.io', style: { flex: '0 0 8%' }},
  ], 
  [
    { img: textile, url: 'https://textile.io' },
    { img: codefi, url: 'https://codefi.consensys.net' },
  ]
]

const HomePartners = () => {
  return (
    <div className="home-partners">
      <h3>Partners</h3>
      <div className="home-partners-logos">
        {PARTNERS.map(partnersRow => (
          <div className="home-partners-logos-row">
            {partnersRow.map(({img, url, style = {}}) => (
              <div className="home-partners-logos-item" style={style}>
                <a href={url} target="_blank" rel="noopener noreferrer"><img src={img}/></a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default HomePartners;