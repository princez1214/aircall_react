import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../Element/Icon/index.jsx'
import Item from './item'

const items = ["Inbox", "All calls"]

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 16px 16px 0;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  
  z-index: 1;
  .logo {
    width: 100px;
  }

  .item {
    padding: 20px 0;
    margin: 0 10px 0 20px;
    border-bottom: solid 3px transparent;
    cursor: pointer;
  }

  .item.active {
    border-bottom: solid 3px red;
  }

  .item span {
    opacity: 0.5;
  }

  .item.active span{
    opacity: 1;
  }
`

const Header = () => {
  const [active, setActive] = useState(1);

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default Header;
