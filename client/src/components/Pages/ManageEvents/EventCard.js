import React, { useState } from "react";

function EventCard({ title, description }) {
  const [eventStatus, setEventStatus] = useState(true);

  function handleEventStatus() {
    setEventStatus(!eventStatus);
  }
  const editButton = eventStatus ? "Edit Event" : "Update" 
  

  function handleEventUpdate() {}

  function handleEventDelete() {}

  return (
    <div>
      <card className ="event-card">
        {eventStatus ? (
          <>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handleEventStatus}>Edit Event</button> 
            <button onClick={handleEventDelete}>Delete Event</button>
          </>
        ) : (
          <form onSubmit={handleEventUpdate}>
            <input type='text' placeholder={title}/>
            <input type='text' placeholder={description}/>
            <button type="submit">Submit</button>
            <button onClick={handleEventStatus}>x</button>
          </form>
        )}
      </card>
    </div>
  );
}

export default EventCard;
