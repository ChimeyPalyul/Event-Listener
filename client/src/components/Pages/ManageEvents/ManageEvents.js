import React, { useState } from 'react'
import EventCard from './EventCard'

const ManageEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then(setEvents);
  }, []);

  return (
    <div>
      <h1>Manage Events</h1>
      {events.map((event) => (
            <EventCard key={event.id} title={event.title} description={event.description}/>
          ))}
      </div>
  )
}

export default ManageEvents