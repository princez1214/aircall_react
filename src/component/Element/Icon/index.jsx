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
import styled from 'styled-components';

const IconWrapper = styled.div`
  position: relative;
  .badge {
    position: absolute;
    top: -8px;
    left: 10px;
    border-radius: 8px;
    background-color: #f95221;
    padding: 2px 6px;
    font-size: 10px;
    font-weight: 600;
    color: white;
  }
`

const Icon = ({ name, size, fill, count = 0 }) => {
  const renderIcon = () => {
    switch(name) {
      case 'logo': return <Logo />
      case 'phone': return <Phone />
      case 'archive': return <Archive size={size}/>
      case 'missedcall': return <MissedCall size={size}/>
      case 'receivecall': return <ReceiveCall size={size}/>
      case 'voicemail': return <VoiceMail size={size}/>
      case 'home': return <HomeIcon size={size}/>
      case 'phonebage': return <PhoneBage size={size} fill={fill} count={count}/>
      case 'user': return <User size={size} fill={fill}/>
      case 'setting': return <Setting size={size} fill={fill}/>
      default: <React.Fragment></React.Fragment>
    }
  }
  return <IconWrapper>
    {renderIcon()}
    {count > 0 && <div className="badge">{count}</div>}
  </IconWrapper>
}

export default Icon