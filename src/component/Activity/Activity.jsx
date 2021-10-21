import React from 'react'
import styeld from 'styled-components'
import Icon from '../Element/Icon'

const ActivityContainer = styeld.div`
  padding: 8px 0 8px 8px;
  margin: 12px;
  border-radius: 8px;
  border: solid 1px #eee;
  display: flex;
  align-items:center;
  justify-content: space-between;
  color: #aaa;
  background: #fafafa;
  cursor: pointer;

  p {
    margin: 6px;
  }
  .from {
    font-size: 14px;
    color: #666;
  }
  .to {
    font-size: 12px;
  }
  .am {
    font-size: 10px;
    border-radius: 4px 0 0 4px;
    padding: 2px;
    border: solid 1px #eee;
    border-right: none;
    margin-left: 4px;
  }
`

const Activity = (props) => {
  const {
    type, direction, from, is_archived, to, via, created, duration
  } = props.call
  
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
          <p className="from font-bold">{from}</p>
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