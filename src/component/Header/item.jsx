import React from 'react';

const Item = (props) => {
  const { 
    text, 
    active, 
    onActive = () => {} 
  } = props;

  return (
    <div onClick={() => onActive()} className={`item ${active ? 'active' : ''}`}>
      <span className="text-14 font-bold">{text}</span>
    </div>
  )
}

export default Item