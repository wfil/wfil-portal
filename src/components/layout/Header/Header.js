import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HamburgerCollapse } from 'react-animated-burgers';

import Flex from '../Flex';
import Button from '../../Button';

import Logo from '../../Logo'
import './Header.scss';
import SocialLinks from '../../SocialLinks';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const lang = useSelector(state => state.language.lang);
  return (
    <header>
      <Flex>
        <div><Logo /></div>
        <div className="burger"><HamburgerCollapse isActive={menuOpen} barColor="#0090ff" toggleButton={() => setMenuOpen(!menuOpen)}/></div>
        <ul className={menuOpen ? 'is-open' : ''}>
          <li><a href="https://twitter.com/wrappedfil" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://discord.link/wfil" target="_blank" rel="noopener noreferrer">Discord</a></li>
          <li><a href="https://t.me/WrappedFIL" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          <li><a href="https://github.com/wfil" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://medium.com/wfil" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><Button alias="link" target="_blank" rel="noopener noreferrer" href="https://bistrot.wfil.network">Launch app</Button></li>
        </ul>
        <div className={`header-social ${menuOpen ? 'is-open' : ''}`}>
          <SocialLinks />
        </div>
      </Flex>
    </header>
  )
}
 
export default Header;