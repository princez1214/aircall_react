import React, { useEffect, useState } from 'react'
import Axios from '../lib/Axios'
import { useLocation, useHistory } from 'react-router-dom'
import { DetailsContainer } from './pages.style'

const ActivityDetails = () => {
  let location = useLocation()
  let history = useHistory();
  let pathname = location.pathname;
  let id = pathname.split("/").slice(-1)[0]
  
  const [activity, setActivity] = useState(null)

  function setArchive() {
    let data = {
      is_archived: true
    }
    Axios.post(`/activities/${id}`, data)
      .then((res) => {
        history.push('/call')
      })
  }

  useEffect(() => {
    Axios.get(`/activities/${id}`)
      .then((res) => {
        let type = ''
        switch(res.data.call_type) {
          case 'answered':  type = "Received Call";
            break;
          case 'missed': type = "Missed Call";
            break;
          case 'voicemail': type = "Voice Email"
            break;
          default: type = ''; break;
        }
        setActivity({
          from: res.data.from,
          date: new Date(res.data.created_at),
          duration: res.data.duration,
          direction: res.data.direction,
          phone_number: res.data.via,
          type: type,
          isInbox : res.data.is_archived
        })
      })
  }, [])
  return (
    activity && <DetailsContainer>
      <div className="return" onClick={() => history.push('/call')}>
        {"Return"}
      </div>
      <div className="avatar">
        {
          activity.isInbox && <div className='is-inbox'>Inbox</div>
        }
      </div>
      <div>
        <p className="text-18 font-bold">{activity.from}</p>
        <div>{activity.phone_number}</div>
      </div>
      <div>
        <p className="font-bold text-left">
          {activity.date.getFullYear()}-{activity.date.getMonth() + 1}-{activity.date.getDate()}
        </p>
        <div className="flex between items-center">
          <div className="flex flex-1 items-center">
            <span>{activity.date.getHours()}:{activity.date.getMinutes()}</span>
            <span className="font-bold ml-4">{activity.type}</span>
          </div>
          <span>{activity.duration} seconds</span>
        </div>
      </div>
      <div>
        {! activity.isInbox && 
          <p className="archive-command text-left" onClick={setArchive}>
            Archive this activity
          </p>
        }
      </div>
      <div></div>
    </DetailsContainer>
  )
}

export default ActivityDetails;