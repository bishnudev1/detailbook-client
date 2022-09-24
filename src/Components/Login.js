import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../App';
import { motion } from 'framer-motion';

const Login = () => {

  const { state, dispatch } = useContext(UserContext);
  console.log(state);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    const resp = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    });

    // eslint-disable-next-line
    const data = await resp.json();

    if (resp.status === 201) {
      dispatch({ type: 'USER', payload: true });
      localStorage.setItem('state', true);
      alert('Login successful');
      navigate('/About');
    }
    else if (resp.status === 422) {
      alert('Wrong crediontials!');
    }
  }

  return (
    <div className='register-container'>
      <motion.div
        initial={{
          x: '-100%',
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          delay: 0.3
        }}
        className='form-img-container'>
        <img className='form-img' src={require('../assets/form.png')} alt="form-img" />
      </motion.div>
      <motion.div
        initial={{
          x: '100%',
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          delay: 0.3
        }}
        className='sub-login-container'>
        <h2 className='form-head-text'>Login here !</h2>
        <p className='welcome-login-text'>Welcome back!</p>
        <label className='form-label'>Email</label>
        <input className='form-input' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email...' />
        <label className='form-label'>Password</label>
        <input className='form-input' type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter your password...' />
        <div className='forget-pass'>
          <p className='forget-pass-text'>Forget your password?</p>
          <Link className='forget-pass-btn' to='/Home'>Forget</Link>
        </div>
        <button className='form-btn' onClick={loginUser}>Login</button>
        <div className='already-have'>
          <p className='already-have-text'>Does not have an account ?</p>
          <Link className='already-have-btn' to='/Register'>Register</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Login