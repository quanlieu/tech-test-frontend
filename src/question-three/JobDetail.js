import React from 'react'

import './JobDetail.css'

export const JobDetail = ({ job }) => {
  const { id, name, location, allocationCount } = job
  const start = new Date(job.start)
  const end = new Date(job.end)

  return (
    <div className="jobDetail">
      <div>
        <span className="jobDetail__name">{name}</span>
        <span className="jobDetail__id">{' '}(Job #{id})</span>
      </div>
      <div>{location}</div>
      <br />
      <div>{start.toLocaleDateString()}</div>
      <div className="jobDetail__time">{start.toLocaleTimeString()} - {end.toLocaleTimeString()}</div>
      <div className="jobDetail__allocation">{allocationCount}</div>
    </div>
  )
}

JobDetail.defaultProps = {
  job: {},
}
