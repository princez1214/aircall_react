import React from 'react'
import Icon from '../Element/Icon'
import { ActivityContainer } from './Activity.style'

const Activity = (props) => {
  const {
    type, direction, from, is_archived, to, via, created, duration
  } = props.call
  const { badge } = props;
  
  const am = new Date(created).getHours() > 12 ? 'PM' : 'AM'
  const hours = am === 'AM' ? new Date(created).getHours() :  new Date(created).getHours() - 12;
  const minutes = new Date(created).getMinutes();

  const renderIcon = (type) => {
    switch(type) {
      case 'missed': return <Icon name="missedcall" size={16} />;
      case 'answered': return <Icon name="receivecall"/>;
      case 'voicemail': return <Icon name="voicemail"/>;
      default: return <Icon name="missedcall" size={16} />;
    }
  }

  return (
    <ActivityContainer>
      <div className="flex items-center">
        {renderIcon(type)}
        <div className="ml-2">
          <p className="from font-bold">
            {from}
            {
              badge &&< span className="badge">1</span>
            }
          </p>
          <p className="to">
            {type==="missed" ? "tried to call on" : ""}
            {type==="answered" ? "received to call from" : ""} {to}
          </p>
        </div>
      </div>
      <div className="font-bold flex items-center">
        <span>{hours}</span>:
        <span>{minutes}</span>
        <div className="am">{am}</div>
      </div>
    </ActivityContainer>
  )
}

export default Activity