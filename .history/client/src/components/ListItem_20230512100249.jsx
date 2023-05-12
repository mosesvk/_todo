import {useState} from 'react'
import TickIcon from './TickIcon'
import axios from 'axios'
import ProgressBar from './ProgressBar'
import Modal from './Modal'

const ListItem = ({task, getData}) => {
  const {date, id, progress, title, user_email:email} = task

  const [showModal, setShowModal] = useState(false)

  const deleteData = async (e) => {

    try {
      axios.delete(`${import.meta.env.VITE_SERVER_URL}/${task.id}`)

      alert(`Delete Successful - todo id: ${id}`)
      setShowModal(false)
      getData()

    } catch (err) {
      console.error(err)
    }
  } 

  return (
    <div className='list-item'>
      <div className='info-container'>
        <TickIcon />
        <p className='task-title'>{title}</p>
        <ProgressBar />
      </div>

      <div className='button-container'>
        <button className='edit' onClick={() => setShowModal(true)}>EDIT</button>
        <button className='delete' onClick={deleteData}>DELETE</button>
      </div>

      {showModal && <Modal task={task} mode={'edit'} setShowModal={setShowModal} getData={getData}/>}
    </div>
  )
}

export default ListItem