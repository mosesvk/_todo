import {useState} from 'react'
import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import Modal from './Modal'

const ListItem = ({task}) => {
  const {date, id, progress, title, user_email:email} = task

  const [showEditModal, setShowEditModal] = useState(false)

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

      {showEditModal && <Modal task={task} setShowEditModal={setShowEditModal}/>}
    </div>
  )
}

export default ListItem