import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './component/Header/Header'

const ContentWrapper = styled.div`

`

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <ContentWrapper></ContentWrapper>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
