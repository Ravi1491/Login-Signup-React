import React from 'react'
import { useNavigate, useParams } from 'react-router'

const Profile = () => {
    const {username} = useParams();
    const navigation = useNavigate();
    return (
        <div>
            <h1>Profile Page of {username}</h1>
            <button onClick={()=>{navigation('/')}}>Go to Home Page</button>
        </div>
    )
}

export default Profile