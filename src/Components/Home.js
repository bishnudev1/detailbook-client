import React,{useContext} from 'react'
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Home = () => {

  const { state, dispatch } = useContext(UserContext);
  console.log(dispatch);

  const options = {
    initial: {
        x: "-100%",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    }
}

  return (
    <div className='home-container'>
      <div className='home-sub-container'>
        <motion.div {...options} transition ={{delay:0.3}} className='first-section'>
          <h2 className='home-head-text'>Detailbook</h2>
          <h3 className='home-sub-text'>A social site to share your random thoughts.</h3>
          <p className='home-desc-text'>Connect with your dearest people with just a click. Create your own blog,essays,tech facts and more for free of cost.</p>
          {
            state ? (
              <Link style={{'textDecoration':'none'}} to='/Post' className='home-btn'>Post Story</Link>
              ):
              (
              <Link style={{'textDecoration':'none'}} to='/Register' className='home-btn'>Create Account</Link>
            )
          }
          <Link style={{'textDecoration':'none'}} to='/Home' className='home-btn'>Check Code</Link>
        </motion.div>
        <motion.div initial = {{
          x: "100%",
          opacity: 0
        }} animate ={{
          x: 0,
          opacity:1
        }} 
        transition ={{
          delay: 0.3
        }}
        className='second-section'>
          <img className='home-img' src={(require('../assets/home.png'))} alt="homeImg" />
        </motion.div>
      </div>
    </div>
  )
}

export default Home