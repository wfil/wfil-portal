import React from 'react';
import { useSelector } from 'react-redux';

import './Header.scss';

const Header = () => {
  const lang = useSelector(state => state.language.lang);
  return (
    <header>Header: {lang}</header>
  )
}
 
export default Header;