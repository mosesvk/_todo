import React from 'react'

const Auth = () => {
  return (
    <div className='auth-container' >
      <div className='auth-container-box'>
        <form>
          <h2>{isLogin ? 'Please log in' : 'Please sign up'}</h2>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          {!isLogin && <input type='password' placeholder='confirm password' />}
        </form>
      </div>
    </div>
  )
}

export default Auth