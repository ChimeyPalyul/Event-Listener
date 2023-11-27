import React, { useState } from 'react'
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
            <VolunteerCard key={user.id} name={user.name} email={user.email}/>
          ))}
    </div>
  )
}

export default ManageVolunteers