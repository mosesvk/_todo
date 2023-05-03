import React from 'react'

const Modal = () => {

  const handleChange = () => {
    console.log('Changing...')
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>Let's</h3>
        </div>

        <form>
        <input 
          required
          maxLength={30}
          placeholder=' Your task goes here'
          name='title'
          value={''}
          onChange={handleChange}
        />
        <label>Drag to select your current progress</label>
        <input 
         required
         id='range'
         type='range'
         min='0'
         max='100'
         name='progress'
         value={''}
         onChange={handleChange}
        />
        <input className='edit' type='submit' />
      </form>
      </div>


    </div>
  )
}

export default Modal