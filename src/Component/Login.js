import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
    const navigation = useNavigate()
    const [data,setData] = useState({name:'',email:'',password:''})

    const flag = 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const records = localStorage.getItem('records');
        const userdata = JSON.parse(records)
        
        userdata.map(item => {
            if(item.email === data.email && item.password === data.password){
                // console.log(data.name);
                navigation(`/profile:${item.name}`)
                flag=1;
            }
        })
        if(flag!=1){
            console.log(data)
            alert('wrong')
        }
    }

    return (
        <div>
            <div className="container">
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input type="text" onChange={(e)=> setData({...data, email:e.target.value})}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Password: </label>
                        <input type="password" onChange={(e)=> setData({...data, password:e.target.value})}/>
                    </div>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login