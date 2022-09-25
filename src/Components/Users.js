import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Users = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [me, setMe] = useState('');

    useEffect(() => {
        getUsers();
        getUserData();
    }, [])

    const deleteAccount = async (id) => {

        let pwd = prompt("Enter your account password...", "eg. 12345");

        const resp = await fetch(`/delete-account/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                pwd
            })
        });

        const data = await resp.json();

        if (resp.status === 422) {
            alert('Sorry wrong password');
        }
        else if(resp.status === 201){
            alert('Your account has been deleted');
            navigate('/Logout');
        }
    }

    const getUsers = async () => {
        const resp = await fetch('/users', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });
        // eslint-disable-next-line
        const data = await resp.json();
        if (resp.status === 201) {
            setUsers(data);
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
        setMe(data._id);
    }

    return (
        <div className='main-explore-container'>
            <table className="dev-card">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>AGE</th>
                        <th>NAME</th>
                        <th>WORK</th>
                        <th>Account</th>
                    </tr>
                </thead>
                {
                    users.map((item, key) => {
                        return (
                            <tbody key={key}>
                                <tr>
                                    <td>{key + 1}</td>
                                    <td>20</td>
                                    <td>{item.name}</td>
                                    <td>{item.work}</td>
                                    {
                                        item._id === me ? (
                                            <td><button onClick={() => deleteAccount(item._id)} className='table-link' >Delete</button></td>
                                        ) :
                                            null
                                    }
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Users