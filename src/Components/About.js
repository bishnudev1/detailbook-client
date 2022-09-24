import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../App';
import { FcApproval } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { motion } from 'framer-motion';


const About = () => {

  // eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, [])

  const getUserData = async () => {
    const resp = await fetch('/about', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      credentials: "include"
    });
    // eslint-disable-next-line
    const data = await resp.json();
    console.log(resp.status);
    if (resp.status === 404) {
      alert('Login first...');
      navigate('/Login');
    }
    else {
      setUser(data);
    }
  }

  return (
    <div className='about-container'>
      <motion.div
      initial = {{
        opacity: 0
      }}
      animate = {{
        opacity: 1
      }}
      transition = {{
        delay: 1
      }}
      className="sub-about-container">
        {
          state ? (
            <>
              <h2 className='head-about-text'>Profile</h2>
              <div className="head-img-about">
                <img className='profile-img' src={require('../assets/profile.png')} alt="profile-img" />
                <div className="head-about-desc">
                  <div className="mid-div">
                    <p className='name-about-desc-text'>{user.name} <FcApproval size={14} /></p>
                    <Link className='edit-profile-btn' to='/Edit-Profile'>Edit <FiEdit /></Link>
                  </div>
                  <p className='age-about-desc-text'>Age : {user.age}</p>
                  <p className='email-about-desc-text'>Email : {user.email}</p>
                  <p className='work-about-desc-text'>Work : {user.work}</p>
                </div>
              </div>
              <div className="mid-desc-about">
                <p className='mid-desc-about-text'>{user.intro}</p>
              </div>
              <div className="about-contact-socials">
                <FaFacebook size={30} />
                <DiGithubBadge size={36} />
                <FiLinkedin size={30} />
              </div>
            </>
          ) :
            (
              <>
                <h2 className='not-logged-in-about-text'>You are not signed in</h2>
                <Link className='not-logged-in-about-btn' to="/Login">Login</Link>
              </>
            )
        }
      </motion.div>
    </div>
  )
}

export default About