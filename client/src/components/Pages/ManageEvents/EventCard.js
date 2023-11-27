import React, { useState } from "react";

function EventCard({ title, description }) {
  const [eventStatus, setEventStatus] = useState(false);

  function handleEventStatus() {
    setEventStatus(!eventStatus);
  }
  

  function handleEventUpdate() {}

  function handleEventDelete() {}

  return (
    <div>
      <card>
        {eventStatus ? (
          <>
            <h3>{title}</h3>
            <p>{description}</p>
          </>
        ) : (
          <form onSubmit={handleEventUpdate}>
            <input>Title</input>
            <input>Description</input>
            <button type="submit">Submit</button>
          </form>
        )}
        <button onClick={handleEventStatus}>Edit Event</button>
        <button onClick={handleEventDelete}>Delete Event</button>
      </card>
    </div>
  );
}

export default EventCard;
