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
        <input 
         required
         type='range'
         min='0'
         max='100'
         name='progress'
         value={''}
         onChange={handleChange}
        />
        <input type='submit' />
      </form>
      </div>


    </div>
  )
}

export default Modal