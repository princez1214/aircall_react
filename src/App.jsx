import React from 'react';
import ReactDOM from 'react-dom';

// import Header from './Header.jsx';
import Icon from './component/Element/Icon/index'
import Header from './component/Header/Header'

const App = () => {
  return (
    <div className='container'>
      <Header/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
