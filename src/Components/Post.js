import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Post = () => {

  const navigate = useNavigate();

  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');

  const submitStory = async () => {
    const resp = await fetch('/post-story',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        title,desc
      })
    });
    const data = await resp.json();
    console.log(data);
    if(resp.status === 201){
      alert('Story has been added!');
      navigate('/Stories')
    }
    else if(resp.status === 422){
      alert('Fill all the details!')
    }
  }

  return (
    <div className='post-container'>
      <div className="sub-post-container">
        <div className="Post-Story">
          <h3 className='post-stories-head'>Post a story</h3>
          <label className='post-stories-label'>Title</label>
          <input className='post-stories-input' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter your title...' />
          <label className='post-stories-label'>Desc</label>
          <input className='post-stories-input' type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Enter your desc...' />
          <button className='post-story-btn' onClick={submitStory}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Post