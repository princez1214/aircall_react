import styled from "styled-components"

const ActivityContainer = styled.div`
  padding: 8px 0 8px 8px;
  margin: 6px;
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
  .badge {
    background-color: #f95221;
    color: white;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 8px;
    margin-left: 8px;
}
`

export { ActivityContainer }