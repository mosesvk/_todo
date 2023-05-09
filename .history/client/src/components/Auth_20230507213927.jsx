import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email, password, confirmPassword);
  console.log(isLogin)

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefatult();

    if (!isLogin && password !== confirmPassword) {
      setError('Make sure passwords match');
      return;
    }

    const res = await axios.post(
      `${import.meta.env.VITE__SERVER_SIGNUP}${endpoint}`,
      { email, password }
    );

    const data = await res.json();

    console.log(data)

    if (data.detail) {
      setError(data.detail);
    } else {
      setCookie('Email', data.email);
      setCookie('AuthToken', data.tokem);

      // window.location.reload();
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
        <form>
          <h2>{isLogin ? 'Please log in' : 'Please sign up'}</h2>
          <input
            type='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <input
              type='password'
              placeholder='confirm password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <input
            type='submit'
            className='create'
            onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')}
          />
          <p>{error}</p>
        </form>
        <div className='auth-options'>
          <button
            className={!isLogin ? 'auth-options-highlighted' : ''}
            onClick={() => viewLogin(false)}
          >
            Sign Up
          </button>
          <button
            className={isLogin ? 'auth-options-highlighted' : ''}
            onClick={() => viewLogin(true)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
