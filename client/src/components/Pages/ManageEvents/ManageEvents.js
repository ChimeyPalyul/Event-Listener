import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import EventForm from './EventForm';

const ManageEvents = ({ volunteers }) => {
 const [events, setEvents] = useState([]);
 const [formStatus, setFormStatus] = useState(false);
 const [postStatus, setPostStatus] = useState(false);

 useEffect(() => {
   fetch("/events")
     .then((r) => r.json())
     .then((data) => setEvents(data));
 }, [postStatus]);

 function handlePostStatus() {
   setPostStatus(!postStatus);
 }

 function handleFormStatus() {
   setFormStatus(!formStatus);
 }

 function handleUpdate(updatedEvent) {
   const updatedEventFilter = events.map((event) => {
     if (event.id === updatedEvent.id) {
       return updatedEvent;
     } else {
       return event;
     }
   });
   setEvents(updatedEventFilter);
 }

 function addEvent(newEvent) {
   console.log(newEvent);
   setEvents([...events, newEvent]);
   console.log(events);
 }

 function handleDelete(deletedEvent) {
   const updatedEvents = events.filter(
     (event) => event.id !== deletedEvent.id
   );
   setEvents(updatedEvents);
 }

 const eventFormButton = formStatus ? "Cancel" : "Add New Event";

 return (
   <>
     <h1 className = 'manage-events'>Manage Events</h1>
     <div className='event-cards-container'>
     <button onClick={handleFormStatus} className='add-event-button'>{eventFormButton}</button>
     <div className="event-container">
     {formStatus ? <EventForm addEvent={addEvent} handlePostStatus={handlePostStatus}/> : null}
     {Array.isArray(events) && events.map((event) => (
       <EventCard
         key={event.id}
         handleDelete={handleDelete}
         event={event}
         onUpdate={handleUpdate}
         handlePostStatus={handlePostStatus}
         volunteers={volunteers}
       />
     ))}
     </div>
    </div>
  </>

 );
};

export default ManageEvents;

