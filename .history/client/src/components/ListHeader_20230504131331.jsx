import React from 'react'
import Modal from './Modal'
import { useState } from 'react'

const ListHeader = ({listName}) => {

  const [showModal, setShowModal] = useState(false)

  const signOut = () => {
    console.log('signout')
  }

  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>Add New</button>
        <button className="signout" onClick={signOut}>Sign Out</button>
      </div>
      <Modal mode={'create'} />
    </div>
  )
}

export default ListHeader