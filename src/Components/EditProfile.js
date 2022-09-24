import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const EditProfile = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState([]);

    const[newname,setNewname] = useState('');
    const[newage,setNewage] = useState('');
    const[newemail,setNewemail] = useState('');
    const[newwork,setNewwork] = useState('');
    const[newintro,setNewintro] = useState('');

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
        if (resp.status !== 201) {
            alert('Login first...');
        }
        else {
            setUser(data);
        }
    }

    const saveProfile = async (id) => {
        if(!newname || !newage || !newemail || !newwork || !newintro){
            alert('Fill updated data!');
        }
        else{
            Axios.put(`/update-profile/${id}`,{
                id:id,
                newname:newname,
                newage:newage,
                newemail:newemail,
                newwork:newwork,
                newintro:newintro,
            });
            alert('Profile has been updated');
            navigate('/About');
        }
    }

    return (
        <div className='update-profile'>
            <div className="sub-update-profile">
                <label className='edit-profile-labels'>Edit Name</label>
                <input className='edit-profile-inputs' type="text" placeholder='Enter your name...' value={newname} onChange={(e) => setNewname(e.target.value)} />
                <label className='edit-profile-labels'>Edit Age</label>
                <input className='edit-profile-inputs' type="text" placeholder='Enter your age...' value={newage} onChange={(e) => setNewage(e.target.value)} />
                <label className='edit-profile-labels'>Edit Email</label>
                <input className='edit-profile-inputs' type="text" placeholder='Enter your name...' value={newemail} onChange={(e) => setNewemail(e.target.value)} />
                <label className='edit-profile-labels'>Edit Work</label>
                <input className='edit-profile-inputs' type="text" placeholder='Enter your name...' value={newwork} onChange={(e) => setNewwork(e.target.value)} />
                <label className='edit-profile-labels'> Edit Intro</label>
                <input className='edit-profile-inputs' type="text" placeholder='Enter your name...' value={newintro} onChange={(e) => setNewintro(e.target.value)} />
                <button className='save-profile-btn' onClick={() => saveProfile(user._id)}>Save</button>
            </div>
        </div>
    )
}

export default EditProfile