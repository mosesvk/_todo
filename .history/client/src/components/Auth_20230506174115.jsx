import { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
        <form>
          <h2>{isLogin ? 'Please log in' : 'Please sign up'}</h2>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          {!isLogin && <input type='password' placeholder='confirm password' />}
          <input type='submit' className='create' />
          <p></p>
        </form>
        <div className='auth-options'>
          <button className={!isLogin && 'auth-options-highlighted'} onClick={() => viewLogin(false)}>Sign Up</button>
          <button className={isLogin && 'auth-options-highlighted'} onClick={() => viewLogin(true)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
