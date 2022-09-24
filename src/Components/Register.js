import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [work, setWork] = useState('');
  const [intro, setIntro] = useState('');

  const registerUser = async () => {
    const resp = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, age, email, password, cpassword, work, intro
      })
    });

    // eslint-disable-next-line
    const data = await resp.json();
    console.log(data);

    if (resp.status === 201) {
      alert('User added successfully');
      navigate('/Login');
    }
    else if (resp.status === 422) {
      alert('Failed to add user');
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
        transition = {{
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
        transition = {{
          delay: 0.3
        }}
        className='sub-register-container'>
        <h2 className='form-head-text'>Register now !</h2>
        <label className='form-label'>Name</label>
        <input className='form-input' type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter your name...' />
        <label className='form-label'>Age</label>
        <input className='form-input' type="text" value={age} onChange={(e) => { setAge(e.target.value) }} placeholder='Enter your age...' />
        <label className='form-label'>Email</label>
        <input className='form-input' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your email...' />
        <label className='form-label'>Work</label>
        <input className='form-input' type="text" value={work} onChange={(e) => { setWork(e.target.value) }} placeholder='Confirm your password...' />
        <label className='form-label'>Password</label>
        <input className='form-input' type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter your password...' />
        <label className='form-label'>Confirm Password</label>
        <input className='form-input' type="text" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} placeholder='Confirm your password...' />
        <label className='form-label'>Short Intro</label>
        <input className='form-input' type="text" value={intro} onChange={(e) => { setIntro(e.target.value) }} placeholder='Add your short intro...' />

        <p className='tnc-text'>By signing up you're agree with our Terms & Condition</p>
        <button className='form-btn' onClick={registerUser}>Register</button>
        <div className='already-have'>
          <p className='already-have-text'>Already have an account ?</p>
          <Link className='already-have-btn' to='/Login'>Login</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Register