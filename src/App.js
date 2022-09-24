import React, { createContext, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import Logout from './Components/Logout';
import { initialState, reducer } from './Reducer/Reducer';
import Footer from './Components/Footer';
import Users from './Components/Users';
import Post from './Components/Post';
import Stories from './Components/Stories';
import EditProfile from './Components/EditProfile';

export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/About' element={<About />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/Post' element={<Post />} />
          <Route path='/Stories' element={<Stories />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='/Edit-Profile' element={<EditProfile />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App