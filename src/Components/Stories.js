import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { motion } from 'framer-motion';

const Stories = () => {


  const navigate = useNavigate();

  const [stories, setStories] = useState([]);
  const [me, setMe] = useState('');

  useEffect(() => {
    getStories();
    getUserData();
    console.log(stories);
    // eslint-disable-next-line
  }, [])

  const getStories = async () => {
    const resp = await fetch('/stories', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "include"
    });
    const data = await resp.json();
    if (resp.status === 201) {
      setStories(data);
    }
  }


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
    setMe(data.name);

  }

  const deleteMyStory = (id) => {
    Axios.delete(`/delete-story/${id}`);
    alert('Your story has been deleted');
    navigate('/Post')
    
  }


  return (
    <div className='stories-container'>
      {
        stories.map((item, key) => {
          return (
            <motion.div
            initial = {{
              y: '-100%',
              opacity: 0
            }}
            animate = {{
              y: 0,
              opacity: 1
            }}
            transition = {{
              delay: 0.5
            }}
            className="story-card" key={key}>
              <div className="card-first">
                <h3 className='story-title'>{item.title}</h3>
                <p className='story-desc'>{item.desc}</p>
              </div>
              <div className="second-card">
                <p className='story-date'>{item.date}</p>
                <p className='story-user'>{item.name}</p>
                {
                  item.name === me ? <button style={{
                    "paddingBlock": "4px",
                    "border": "1px solid slateblue",
                    "borderRadius": "5px",
                    "color": "slateblue",
                    "paddingInline": "10px"
                  }} onClick={() => deleteMyStory(item._id)}>Delete</button> : null
                }
              </div>
            </motion.div>
          )
        })
      }
    </div>
  )
}

export default Stories