import React, { useState, useEffect } from 'react'
import VolunteerCard from './VolunteerCard'

const ManageVolunteers = () => {
  const [volunteers, setVolunteers] = useState([])

  useEffect(() => {
    fetch("/volunteers")
      .then((r) => r.json())
      .then(setVolunteers);
  }, []);

  return (
    <div>
      <h1>Manage Volunteers</h1>
      {volunteers.map((volunteer) => (
            <VolunteerCard key={volunteer.id} name={volunteer.name} email={volunteer.email}/>
          ))}
    </div>
  )
}

export default ManageVolunteers