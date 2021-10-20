import React, { useState } from 'react';
import Icon from '../Element/Icon/index.jsx'
import Item from './item'

const items = ["Inbox", "All calls"]

const Header = () => {
  const [active, setActive] = useState(1);

  return (
    <header>
      <div className="flex items-center between">
        <div className="flex items-center logo">
          <Icon name="phone"/>
          <span className="text-18 font-bold">Activity</span>
        </div>
        <div className="flex">
          {
            items.map((item, index) => 
              <div key={index} className="flex items-center">
                <Item
                  onActive = {() => setActive(index)} 
                  text={item} 
                  active={index === active ? true : false}
                />
              </div>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
