import React from "react";

function VolunteerCard({ name, email, registrations }) {
  return (
    <div className="volunteer-card">
      <card>
        <h3><b>Name:</b> {name}</h3>
        <p><b>Email:</b> {email}</p>
        {registrations.map((registration) => (
          <ul>
            <h1><b>Event Registrations:</b></h1>
            <li><b>Event Name:</b> {registration.opportunity.title}
            <ul><b>Event Description:</b> {registration.opportunity.description}</ul>
            </li>
          </ul>
        ))}
      </card>
    </div>
  );
}

export default VolunteerCard;
