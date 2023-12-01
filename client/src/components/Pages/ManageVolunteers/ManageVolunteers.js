import React from 'react'
import VolunteerCard from './VolunteerCard'

const ManageVolunteers = ({ volunteers }) => {

  return (
    <>
    <div className='entire-volunteer-pg'>
      <h1 className='home-header'>Manage Volunteers</h1>
      <div className='volunteer-container'>
        {volunteers.map((volunteer) => (
              <VolunteerCard key={volunteer.id} name={volunteer.name} email={volunteer.email} registrations={volunteer.registrations}/>
            ))}
      </div>
      </div>
    </>
  )
}

export default ManageVolunteers