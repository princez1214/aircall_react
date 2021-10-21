import styled from 'styled-components'

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0px;
  background-color: white;
  height: 52px;
  width: 100%;

  .content {
    height: 52px;
    justify-content: space-between;
    display: flex;
    padding: 0 20px;
  }

  .circle-outer {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: solid 1px #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    .circle-inner {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: #30b01d;
    }
  }
`

const HomeWrapper = styled.div`
  display: flex;
  width: 42px;
  margin: auto;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  &:hover * {
    opacity: 0.95;
    background-color: #f8f8f8;
  }
  .home {
    border: solid 1px #eee;
    padding: 4px;
    width: fit-content;
    border-radius: 100%;
    position: absolute;
    top: -24px;
    background-color: white;
  }
`

const Item = styled.div`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2px;
  border-bottom: solid 3px ${props => props.active ? "#30b01d" : 'transparent'};
`

export { BottomContainer, HomeWrapper, Item }