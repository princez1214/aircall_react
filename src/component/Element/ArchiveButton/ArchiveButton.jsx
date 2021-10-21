import React from 'react';
import styled from'styled-components'
import Icon from '../Icon';

const ArchiveButtonContainer = styled.div`
  border-radius: 0 0 8px 8px;
  padding: 16px;
  border: solid 1px #eee;
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    margin-left: 16px;
  }
  &:hover {
    /* padding-top: 15px; */
    background-color: #f6f6f6;
  }
`

const ArchiveButton = () => {
  return (
    <ArchiveButtonContainer>
      <Icon name="archive" size={16}/>
      <span className="font-bold">Archive all calls</span>
    </ArchiveButtonContainer>
  )
}

export default ArchiveButton