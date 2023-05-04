import React from 'react'
import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'

const ListItem = ({task}) => {
  const {date, id, progress, title, user_email:email} = task

  return (
    <div className='list-item'>
      <div className='info-container'>
        <TickIcon />
        <p className='task-title'>{title}</p>
        <ProgressBar />
      </div>

      <div className='button-container'>
        <button className='edit'>EDIT</button>
        <button className='delete'>DELETE</button>
      </div>
    </div>
  )
}

export default ListItem