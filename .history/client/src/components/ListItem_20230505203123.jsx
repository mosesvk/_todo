import {useState} from 'react'
import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import Modal from './Modal'

const ListItem = ({task, getData}) => {
  const {date, id, progress, title, user_email:email} = task

  const [showModal, setShowModal] = useState(false)

  return (
    <div className='list-item'>
      <div className='info-container'>
        <TickIcon />
        <p className='task-title'>{title}</p>
        <ProgressBar />
      </div>

      <div className='button-container'>
        <button className='edit' onClick={() => setShowModal(true)}>EDIT</button>
        <button className='delete'>DELETE</button>
      </div>

      {showModal && <Modal task={task} mode={'edit'} setShowModal={setShowModal} getData={getData}/>}
    </div>
  )
}

export default ListItem