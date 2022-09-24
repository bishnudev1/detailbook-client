import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './style.css';
import { UserContext } from '../App';

const Navbar = () => {

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

    const { state, dispatch } = useContext(UserContext);
    console.log(dispatch);

    function Menu() {
        const ul = document.querySelector('.right');
        ul.style.top === '-480px' ? ul.style.top = '65px' : ul.style.top = '-480px'
    }

    return (
        <nav className="bg-white shadow-md p-5 md:flex md:items-center md:justify-between">
            <motion.div {...options} className="left flex justify-between items-center">
                <h2 className="font-bold text-xl text-blue-600">Detailbook</h2>
                <div className="menu list-none flex flex-col space-y-1 md:hidden" onClick={() => Menu()}>
                    <li className="w-5 h-1 bg-blue-500"></li>
                    <li className="w-5 h-1 bg-blue-500"></li>
                    <li className="w-5 h-1 bg-blue-500"></li>
                </div>
            </motion.div>
            <motion.ul 
            initial = {{
                x: "100%",
                opacity: 0
            }}

            animate = {{
                x: 0,
                opacity: 1
            }}
            class="right flex flex-col md:flex md:space-x-3 md:items-center md:flex-row absolute md:static z-[111] md:z-auto top-[-400px] left-0 bg-white w-full md:w-auto transition-all ease-in duration-500 p-5 md:p-0">
                <Link to='/' className="my-2 md:my-0 font-serif">Home</Link>
                <Link to='/About' className="my-2 md:my-0 font-serif">Profile</Link>
                <Link to='/Stories' className="my-2 md:my-0 font-serif">Stories</Link>
                <Link to='/Users' className="my-2 md:my-0 font-serif">Users</Link>
                {
                    state ? (
                        <Link to='/Post' className="my-2 md:my-0 font-serif">Post a story</Link>
                    ) :
                        (
                            null
                        )
                }
                <div className="flex space-x-3 items-center md: md:pl-6">
                    {
                        state ? (
                            <>
                                <Link to='/Logout' className="py-1 px-2 md:py-1.5 md:px-4 bg-blue-500 text-white rounded-md text-sm">Sign Out</Link>
                            </>
                        ) :
                            (
                                <>
                                    <Link to='/Register' className="py-1 px-2 md:py-1.5 md:px-4 bg-blue-500 text-white rounded-md text-sm">Sign Up</Link>
                                    <Link to='/Login' className="py-1 px-2 md:py-1.5 md:px-4 bg-blue-500 text-white rounded-md text-sm">Sign In</Link>
                                </>
                            )
                    }
                </div>
            </motion.ul>
        </nav>
    )
}

export default Navbar