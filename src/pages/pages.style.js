import styled from "styled-components";

const DetailsContainer = styled.div`
  text-align: center;
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: gray;
    margin: auto;
    margin-top: 20px;
    position: relative;

    .is-inbox {
      background-color: #30b01d;
      padding: 2px 4px;
      border-radius: 8px;
      color: white;
      font-size: 10px;
      font-weight: 600;
      position: absolute;
      right: -24px;
      bottom: 0px;
    }
  }

  p {
    margin-bottom: 8px;
  }
  .return {
    font-size: 16px;
    margin-top: 8px;
    cursor: pointer;
    text-align: left;
    color: #0000ffe0;
    font-weight: 500;
    width: fit-content;
    &:hover {
      color: #0000ffc0;
    }
  }
  .archive-command {
    font-size: 16px;
    color: #0000ff80;
    cursor: pointer;
    padding: 8px 0;
    font-weight: 600;
    border-top: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    &:hover {
      color: #0000ffc0;
    }
  }
`

const ActivityWrapper = styled.div`
  color: #ccc;
  hr {
    height: 0px;
    border-top:1px dashed #ccc;
  }
  .date {
    margin: 0 8px;
  }
`

export { DetailsContainer, ActivityWrapper }