import React from 'react'
import Icon from '../Element/Icon'
import { BottomContainer, HomeWrapper, Item } from './Botton.styled'

const items = [
  {
    name: "phone",
    component: <Icon name="phonebage" size={18} fill="#666"/>
  },
  {
    name: "contact",
    component: <Icon name="user" size={18} fill="#666"/>
  },
  { name: "blank" },
  { name: "blank" },
  { 
    name: "setting",
    component: <Icon name="setting" size={18} fill="#666"/>
  },
  { 
    name: "setting",
    component: <div className="circle-outer">
    <div className="circle-inner"></div>
  </div>
  },
]

const Bottom = (props) => {
  const { 
    setItem = () => {}, 
    activeItem = "phone" 
  } = props;
  return (
    <BottomContainer>
      <HomeWrapper>
        <div className="home">
          <Icon name="home"/>
        </div>
      </HomeWrapper>
      <div className="content">
        <div className="flex items-center flex-1 between">
          {
            items.map((item, key) => (
              <Item 
                key={key}
                onClick={() => item.name !== 'blank' && setItem(item.name)}
                active={item.name === activeItem}
              >
                {item.name !== 'blank' && item.component}
              </Item>
            ))
          }
        </div>
      </div>
    </BottomContainer>
  )
}

export default Bottom;