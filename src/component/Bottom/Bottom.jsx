import React from 'react'
import Icon from '../Element/Icon'
import { BottomContainer, HomeWrapper, Item } from './Botton.styled'
import { useHistory } from 'react-router-dom'

const Bottom = (props) => {
  const history = useHistory()

  const { 
    setItem = () => {}, 
    activeItem = "phone",
    missedcallCount = 0
  } = props;

  const items = [
    {
      name: "phone",
      component: <Icon name="phonebage" size={18} count={missedcallCount} fill="#555"/>,
      uri: '/call'
    },
    {
      name: "contact",
      component: <Icon name="user" size={18} fill="#555"/>,
      uri: '/contracts'
    },
    { name: "blank" },
    { name: "blank" },
    { 
      name: "setting",
      component: <Icon name="setting" size={18} fill="#555"/>,
      uri: '/setting'
    },
    { 
      name: "blank",
      component: <div className="circle-outer">
      <div className="circle-inner"></div>
    </div>
    },
  ]

  return (
    <BottomContainer>
      <HomeWrapper onClick={() => history.push("/")}>
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
                onClick={() => {
                  item.name !== 'blank' && setItem(item.name)
                  history.push(item.uri)
                }}
                active={item.name === activeItem}
              >
                {item.component && item.component}
              </Item>
            ))
          }
        </div>
      </div>
    </BottomContainer>
  )
}

export default Bottom;