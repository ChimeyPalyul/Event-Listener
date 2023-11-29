import React from "react";

function VolunteerCard({ name, email, registrations }) {
  return (
    <div>
      <card>
        <h3>{name}</h3>
        <p>{email}</p>
        {registrations.map((registration) => (
          <ul>
            <li>{registration.opportunity.title}
            <ul>{registration.opportunity.description}</ul>
            </li>
          </ul>
        ))}
      </card>
    </div>
  );
}

export default VolunteerCard;
