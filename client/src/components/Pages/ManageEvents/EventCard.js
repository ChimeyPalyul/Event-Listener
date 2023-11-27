import React from 'react'

function EventCard({ title, description }) {
  return (
    <div>
        <card>
            <h3>{title}</h3>
            <p>{description}</p>
        </card>
    </div>
  )
}

export default EventCard