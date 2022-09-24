import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {

    const { state, dispatch } = useContext(UserContext);
    console.log(state);

    const navigate = useNavigate();

    useEffect(() => {
        logout();
        // eslint-disable-next-line
    }, [])

    const logout = async () => {
        const resp = await fetch('/logout', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });
        // eslint-disable-next-line
        const data = await resp.json();
        if (resp.status === 200) {
            dispatch({ type: 'USER', payload: false });
            localStorage.clear();
            //localStorage.setItem('state',false);
            navigate('/Login');
        }
        else if (resp.status !== 200) {
            alert("You're not logged in");
        }
    }

    return (
        <div></div>
    )
}

export default Logout