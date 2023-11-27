import React from 'react'

function VolunteerCard({ name, email }) {
    
    return (
      <div>
          <card>
              <h3>{name}</h3>
              <p>{email}</p>
          </card>
      </div>
    )
  }

export default VolunteerCard