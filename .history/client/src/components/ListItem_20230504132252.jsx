import {useState} from 'react'
import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import Modal from './Modal'

const ListItem = ({task}) => {
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

      {setShowModal && <Modal mode={edit} setShowModal={setShowModal}/>}
    </div>
  )
}

export default ListItem