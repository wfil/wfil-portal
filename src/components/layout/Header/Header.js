import React from 'react';
import { useSelector } from 'react-redux';

import Flex from '../Flex';
import Button from '../../Button';

import Logo from '../../Logo'
import './Header.scss';

const Header = () => {
  const lang = useSelector(state => state.language.lang);
  return (
    <header>
      <Flex>
        <div><Logo /></div>
        <ul>
          <li><a href="https://github.com/wfil" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://twitter.com/wrappedfil" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://medium.com/wfil" target="_blank" rel="noopener noreferrer">Blog</a></li>
          <li><Button alias="link" target="_blank" rel="noopener noreferrer" href="https://app.wfil.network">Launch app</Button></li>
        </ul>
      </Flex>
    </header>
  )
}
 
export default Header;