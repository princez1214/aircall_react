import React, { useEffect, useState } from 'react';
import './css/app.css'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Header from './component/Header/Header'
import Bottom from './component/Bottom/Bottom';
import CallActivity from './pages/CallActivity';
import ActivityDetails from './pages/ActivityDetails';

const ContentWrapper = styled.div`
  padding: 0 16px;
  background-color: #f8f8f8;
  min-height: 520px;
  padding-bottom: 40px;
  overflow-y: auto;
  position: relative;
`

const App = () => {
  const history = useHistory();
  const [activeBitem, setBitem] = useState('')
  const [activeHitem, setHitem] = useState(1);
  const [missedcallCount, setMissedCallCount] = useState(0)
 
  return (
    <div className='container'>
      <Router history={history}>
        <Header 
          setActive = {(item) => setHitem(item)}
          selectedItem = {activeHitem}
        />
        <ContentWrapper>
          <Switch>
            <Route exact path="/">
              <p className="font-bold text-18">Welcome</p>
            </Route>
            <Route exact path="/call">
              <CallActivity 
                setMissedCall={(count) => setMissedCallCount(count)}
                activeHitem = {activeHitem}
              />
            </Route>
            <Route path="/call/:id">
              <ActivityDetails />
            </Route>
            <Route path="/contracts">
              <p className="font-bold text-18">Contracts</p>
            </Route>
            <Route path="/setting">
            <p className="font-bold text-18">Settings</p>
            </Route>
          </Switch>
        </ContentWrapper>
        <Bottom 
          setItem = {(item) => setBitem(item)} 
          activeItem = {activeBitem}
          missedcallCount={missedcallCount}
        />
      </Router>
    </div>
  );
};

export default App;
