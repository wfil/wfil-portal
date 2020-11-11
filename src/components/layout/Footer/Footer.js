import React from 'react';
import { useDispatch } from 'react-redux';

import { setLanguage } from '../../../redux/actions/languageActions';

import './Footer.scss';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer>
      <div>Footer</div>
      <button onClick={() => dispatch(setLanguage('es'))}>ES</button>
      <button onClick={() => dispatch(setLanguage('en'))}>ES</button>
    </footer>
  )
}
 
export default Footer;