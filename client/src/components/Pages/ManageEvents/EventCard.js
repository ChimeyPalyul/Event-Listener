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
      console.log("No volunteer selected");
    }
  }

  function removeSignup(id) {
    fetch(`/registrations/${id}`, {
      method: "DELETE",
    }).then(handlePostStatus);
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

  const volunteerList = Array.isArray(event.registrations) && event.registrations.map((registration) => (
    <div>
      <li>
        {registration.account?.name}
        <button
          id="deleteVolunteerBtn"
          onClick={() => removeSignup(registration.id)}
        >X</button>
      </li>
    </div>
  ));

  return (
    <div>
      <card>
        {eventStatus ? (
          <>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <button onClick={handleEventStatus}>Edit Event</button>
            <button onClick={() => handleEventDelete(event)}>
              Delete Event
            </button>
            <h5>Volunteers</h5>
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
            <button onClick={handleAddVolunteer}>Add Volunteer</button>
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
