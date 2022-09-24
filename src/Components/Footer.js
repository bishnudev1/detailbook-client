import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Footer = () => {

    const options = {
        initial: {
            y: '-100%',
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            delay: 0.6
        }
    }

  return (
    <motion.div {...options} className='footer'>
        <div className='sub-footer-container'>
        <div className='first-foot'>
            <img className='foot-img' src={require('../assets/footImg.png')} alt="footer-img" />
            <h3 className='footer-head-text'>Detailbook</h3>
        </div>
        <div className='second-foot'>
            <ul className='foot-ul-first'>
                <Link className='foot-link' to='/Home'>Home</Link>
                <Link className='foot-link' to='/Home'>Register</Link>
                <Link className='foot-link' to='/Home'>Team</Link>
            </ul>
            <ul className='foot-ul-second'>
                <Link className='foot-link' to='/Home'>About</Link>
                <Link className='foot-link' to='/Home'>Contact</Link>
                <Link className='foot-link' to='/Home'>Login</Link>
            </ul>
            <ul className='foot-ul-third'>
                <Link className='foot-link' to='/Home'>Policy</Link>
                <Link className='foot-link' to='/Home'>Privacy </Link>
                <Link className='foot-link' to='/Home'>FAQ</Link>
            </ul>
        </div>
        </div>
        <div className='copyright-foot'>
            <p className='copyright-text'>Copyright &copy;Detailbook 2022</p>
        </div>
    </motion.div>
  )
}

export default Footer