import React, { useState } from "react";

function EventCard({ handleDelete, event, onUpdate }) {
  const [eventStatus, setEventStatus] = useState(true);
  const [form, setForm] = useState({
    title: '',
    description: '',
  });
  
  function handleEventStatus() {
    setForm(event)
    setEventStatus(!eventStatus);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  

  function handleEventUpdate() {
    fetch(`/events/${event.id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(form)
  })
  .then(r => r.json())
  .then(updatedEvent => console.log(updatedEvent))
  }

  function handleEventDelete(event) {
    console.log(event)
    fetch(`/events/${event.id}`, {
        method: "DELETE",
  })
    handleDelete(event)
}

  

  return (
    <div>
      <card>
        {eventStatus ? (
          <>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button onClick={handleEventStatus}>Edit Event</button> 
            <button onClick={() => handleEventDelete(event)}>Delete Event</button>
          </>
        ) : (
          <form onSubmit={handleEventUpdate}>
            <input type='text' value={form.title} onChange={handleChange} name='title'/>
            <input type='text' value={form.description} onChange={handleChange} name='description'/>
            <button type="submit">Submit</button>
            <button onClick={handleEventStatus}>x</button>
          </form>
        )}
      </card>
    </div>
  );
}

export default EventCard;
