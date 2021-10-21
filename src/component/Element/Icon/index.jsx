import React from 'react';
// import { LOGO } from '../../constant/icon';
import Logo from './Logo';
import Phone from './Phone';
import Archive from './Archive';
import MissedCall from './MissedCall';
import ReceiveCall from './ReceiveCall';
import VoiceMail from './VoiceMail';
import HomeIcon from './HomeIcon';
import PhoneBage from './PhoneBage';
import User from './User';
import Setting from './Setting';

const Icon = ({ name, size, fill }) => {
  const renderIcon = () => {
    switch(name) {
      case 'logo': return <Logo />
      case 'phone': return <Phone />
      case 'archive': return <Archive size={size}/>
      case 'missedcall': return <MissedCall size={size}/>
      case 'receivecall': return <ReceiveCall size={size}/>
      case 'voicemail': return <VoiceMail size={size}/>
      case 'home': return <HomeIcon size={size}/>
      case 'phonebage': return <PhoneBage size={size} fill={fill}/>
      case 'user': return <User size={size} fill={fill}/>
      case 'setting': return <Setting size={size} fill={fill}/>
      default: <React.Fragment></React.Fragment>
    }
  }
  return renderIcon()
}

export default Icon