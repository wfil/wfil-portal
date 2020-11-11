import React from 'react';

import './Button.scss';

const Button = ({ children, alias = 'button', ...rest }) => {
  return (
    alias === 'link'
    ? <a className="app-button" {...rest}>{children}</a>
    : <button className="app-button" {...rest}>{children}</button>
  )
}
 
export default Button;