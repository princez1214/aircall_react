import React, { useEffect, useState } from 'react'
import Axios from '../lib/Axios'
import { useHistory } from 'react-router-dom'
import { ActivityWrapper } from './pages.style'
import ArchiveButton from '../component/Element/ArchiveButton/ArchiveButton'
import Activity from '../component/Activity/Activity'
import { getDay } from '../utils/function'
import LoadingSpinner from '../component/Element/Loading/Loding'

const CallActivity = ({ activeHitem, setMissedCall }) => {
  const history = useHistory();
  const [activities, setActivities] = useState([]);
  const [activeActivities, setActiveActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const archiveAll = () => {
    let data = {
      is_archived: true
    }
    let requestArray = []
    activities.map(activity => requestArray.push(
      Axios.post(`/activities/${activity.id}`, data)
    ))
    setLoading(true);
    Promise.all(requestArray)
    .then(res => {
      getActivities()
      setLoading(true);
    })
    .catch(error => setLoading(false))
  }

  const getActivities = () => {
    setLoading(true);
    Axios.get('/activities')
      .then((res) => {
        setLoading(false);
        let newActivities = [];
        let count = 0;

        res.data.forEach((call) => {
          !call.is_archived && call.call_type === "missed" && count++
          newActivities.push({
            id: call.id,
            type: call.call_type,
            direction: call.direction,
            from: call.from,
            is_archived: call.is_archived,
            to: call.to,
            via: call.via,
            created: call.created_at,
            duration: call.duration
          })
        })

        newActivities.sort((first, second) => 
          new Date(first.created) > new Date(second.created)
        )
        setActivities([...newActivities])
        setMissedCall(count)
      })
      .catch((error) => {
        setLoading(false)
      })
  }
  // get calls
  useEffect(() => {
    return getActivities()
  }, [])

  // sort the calls
  useEffect(() => {
    setActiveActivities(
      activities.filter((activity) => {
        if(activeHitem === 0) return activity.is_archived
        return true
      })
    )
  },[activities, activeHitem])

  return (
    <React.Fragment>
      {activeHitem !== 0 && <ArchiveButton archiveAll={archiveAll}/>}
      <div className="mt-4">
        {
          !loading ? activeActivities.length > 0 ?
            activeActivities.map((call, index) => (
              <ActivityWrapper key={index} onClick={() => history.push(`/call/${call.id}`) }>
                {
                  getDay(call.created) !== (activeActivities[index - 1] ? getDay(activeActivities[index - 1].created) : null) &&
                    <div className="flex items-center">
                      <hr className="flex-1"/>
                      <span className="date">{getDay(call.created)}</span>
                      <hr className="flex-1"/>
                    </div>
                }
                <Activity 
                  call={call} 
                  badge={!call.is_archived && call.type === "missed"}
                />
              </ActivityWrapper>
            )) : 
              <p className="text-center info text-18">
                There is no any calls
              </p> : 
            <div className="h-full flex items-center">
              <LoadingSpinner />
            </div>
        }
      </div>
    </React.Fragment>
  )
}

export default CallActivity