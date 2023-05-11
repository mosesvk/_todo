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

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    // console.log(e, endpoint)
    // e.preventDefatult();
    console.log('hit - 1')

    if (!isLogin && password !== confirmPassword) {
      setError('Make sure passwords match');
      console.log(error)
      return;
    }

    // const res = await axios.post(
    //   `${import.meta.env.VITE_SERVER_URL}/${endpoint}`,
    //   { email, password }
    // );
    console.log(`http://localhost:8000/${endpoint}`)

    try {

      
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/${endpoint}`, {
        email,
        password
      });
  
      const data = await res.json();
  
      console.log(data);
  
      if (data.detail) {
        setError(data.detail);
      } else {
        setCookie('Email', data.email);
        setCookie('AuthToken', data.tokem);
  
        window.location.reload();
      }
    } catch (err) {
      console.error(err)
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
            type='button'
            className='create'
            onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')}
          />
          {error && <p>{error}</p>}
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