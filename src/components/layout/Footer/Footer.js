import React from 'react';
import { useDispatch } from 'react-redux';

import { setLanguage } from '../../../redux/actions/languageActions';

import './Footer.scss';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer>
      &copy; 2020 WFIL Labs.
    </footer>
  )
}
 
export default Footer;