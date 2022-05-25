import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigation = useNavigate()
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>{navigation('/Login')}}>Login</button>
            <button onClick={()=>{navigation('/Signup')}}>Signup</button>
        </div>
    )
}

export default Home