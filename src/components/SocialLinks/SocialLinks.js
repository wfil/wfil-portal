import React from 'react';

import Icon from '../Icon';

import './SocialLinks.scss';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/wfil" target="_blank" rel="noopener noreferrer"><Icon name="github" width="33px" /></a>
      <a href="https://twitter.com/wrappedfil" target="_blank" rel="noopener noreferrer"><Icon name="twitter"  width="30px"/></a>
      <a href="https://t.me/WrappedFIL" target="_blank" rel="noopener noreferrer"><Icon name="telegram"  width="30px"/></a>
      <a href="https://medium.com/wfil" target="_blank" rel="noopener noreferrer"><Icon name="medium"  width="22px"/></a>
      <a href="https://www.linkedin.com/company/wfil-labs/about/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" width="20px"/></a>
    </div>
  )
}
 
export default SocialLinks;