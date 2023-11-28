import React, { useState, useEffect } from 'react'
import EventCard from './EventCard'
import EventForm from './EventForm'

const ManageEvents = () => {
  const [events, setEvents] = useState([])
  const [formStatus, setFormStatus] =  useState(false)

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then(data => setEvents(data));
  }, []);

  function handleFormStatus() {
    setFormStatus(!formStatus)
  }

  function addEvent(newEvent) {
    setEvents([...events, newEvent])
  }
  
  const eventFormButton = formStatus ? 'Cancel' : 'Add New Event'

  return (
    <div>
      <h1>Manage Events</h1>
      <button onClick={handleFormStatus}>{eventFormButton}</button>
      {formStatus ? <EventForm addEvent={addEvent}/> : null}
      {events.map((event) => (
            <EventCard key={event.id} title={event.title} description={event.description}/>
          ))}
      </div>
  )
}

export default ManageEvents