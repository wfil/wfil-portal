import React from 'react';

import Github from './github';
import Linkedin from './linkedin';
import Telegram from './telegram';
import Twitter from './twitter';
import Medium from './medium';

const ICONS_COMPONENTS = {
  github: Github,
  linkedin: Linkedin,
  telegram: Telegram,
  twitter: Twitter,
  medium: Medium
}

const Icon = ({ name, width = '20px' }) => {
  const Component = ICONS_COMPONENTS[name];
  return <Component width={width} />
}
 
export default Icon;