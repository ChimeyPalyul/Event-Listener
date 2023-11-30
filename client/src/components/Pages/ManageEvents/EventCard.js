import React, { useState } from "react";

function EventCard({
  handleDelete,
  event,
  onUpdate,
  handlePostStatus,
  volunteers,
}) {
  const [eventStatus, setEventStatus] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [selectedVolunteer, setSelectedVolunteer] = useState("");

  function handleAddVolunteer() {
    if (selectedVolunteer) {
      const newRegistration = {
        account_id: selectedVolunteer,
        opportunity_id: event.id,
      };
      fetch("/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRegistration),
      })
        .then((r) => r.json())
        .then(handlePostStatus);
    } else {
      console.log('No volunteer selected');
    }
   }
   

  function removeSignup(id) {
    fetch(`/registrations/${id}`, {
      method: "DELETE"
    })
    .then(handlePostStatus);
   }
   

  function handleEventStatus() {
    setForm(event);
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((r) => r.json())
      .then((updatedEvent) => onUpdate(updatedEvent));
  }

  function handleEventDelete(event) {
    console.log(event);
    fetch(`/events/${event.id}`, {
      method: "DELETE",
    });
    handleDelete(event);
  }

  const volunteerList = event.registrations.map((registration) => (
    <div className="volunteer-list">
      <li>
        {registration.account?.name}
        <button className="btn btn-circle btn-sm" id = "deleteVolunteerBtn" onClick={() => removeSignup(registration.id)}> <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
      </li>
    </div>
  ));

  return (
    <div>
      <card className="event-card">
        {eventStatus ? (
          <>
            <h3 className='title'>{event.title}</h3>
            <p>{event.description}</p>
            <button className="btn glass" onClick={handleEventStatus}>Edit Event</button>
            <button className="btn glass" onClick={() => handleEventDelete(event)}>
              Delete Event
            </button>
            <h5 className="volunteers">Volunteers</h5>
            {volunteerList}
            <select
              value={selectedVolunteer}
              onChange={(e) => setSelectedVolunteer(e.target.value)}
            >
              <option>--Select a Volunteer--</option>
              {volunteers.map((volunteer) => (
                <option value={volunteer.id}>{volunteer.name}</option>
              ))}
            </select>
            <button 
            className="btn glass" 
            onClick={event.registrations.length >= 10 ? null : handleAddVolunteer}
            disabled={event.registrations.length >= 10}
            >
           {event.registrations.length >= 10 ? "Sign Up Full" : "Add Volunteer"}
            </button>
          </>
        ) : (
          <form onSubmit={handleEventUpdate}>
            <input
              type="text"
              value={form.title}
              onChange={handleChange}
              name="title"
            />
            <input
              type="text"
              value={form.description}
              onChange={handleChange}
              name="description"
            />
            <button type="submit">Submit</button>
            <button onClick={handleEventStatus}>x</button>
          </form>
        )}
      </card>
    </div>
  );
}

export default EventCard;
