import React from 'react';

import './Flex.scss';

const Flex = ({
  children,
  direction = 'row',
  justify = 'space-between',
  align = 'center'
}) => {
  return (
    <div
      className="app-flex"
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align
      }}
    >
      {children}
    </div>
  )
}
 
export default Flex;