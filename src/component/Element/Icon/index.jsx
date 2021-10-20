import React from 'react';
// import { LOGO } from '../../constant/icon';
import Logo from './Logo';
import Phone from './Phone';

const Icon = ({ name }) => {
  const renderIcon = () => {
    switch(name) {
      case 'logo': return <Logo />
      case 'phone': return <Phone />
      default: <React.Fragment></React.Fragment>
    }
  }
  return renderIcon()
}

export default Icon