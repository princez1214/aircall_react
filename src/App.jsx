import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ArchiveButton from './component/Element/ArchiveButton/ArchiveButton'
import Activity from './component/Activity/Activity'
import Header from './component/Header/Header'
import Axios from 'axios'
import Bottom from './component/Bottom/Bottom';

const ContentWrapper = styled.div`
  padding: 0 16px;
  background-color: #f8f8f8;
  height: 580px;
  overflow-y: auto;
`

const App = () => {
  const [loading, setLoading] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setLoading(true);
    // get calls
    Axios.get('https://aircall-job.herokuapp.com/activities')
      .then((res) => {
        setLoading(false);
        let newActivities = [];

        res.data.forEach((call) => {
          newActivities.push({
            type: call.call_type,
            direction: call.direction,
            from: call.from,
            is_archived: call.isarchived,
            to: call.to,
            via: call.via,
            created: call.created_at,
            duration: call.duration
          })
        })
        
        setActivities([...newActivities])
      })
      .catch((error) => {
        setLoading(false)
      })

  }, [])

  return (
    <div className='container'>
      <Header />
      <ContentWrapper>
        <ArchiveButton />
        {
          activities.map((call, index) => (
            <Activity call={call} key={index}/>
          ))
        }
      </ContentWrapper>
      <Bottom />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
