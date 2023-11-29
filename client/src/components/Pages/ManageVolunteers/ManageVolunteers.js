import React from 'react'
import VolunteerCard from './VolunteerCard'

const ManageVolunteers = ({ volunteers }) => {

  return (
    <>
      <h1>Manage Volunteers</h1>
      <div className='volunteer-container'>
        {volunteers.map((volunteer) => (
              <VolunteerCard key={volunteer.id} name={volunteer.name} email={volunteer.email} registrations={volunteer.registrations}/>
            ))}
      </div>
    </>
  )
}

export default ManageVolunteers