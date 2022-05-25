import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Login from './Login';

const Signup = () => {

    const getData = () => {
        const userdata = localStorage.getItem('records');
        if(userdata){
            return JSON.parse(userdata)
        }
        else{
            return []
        }
    }
    
    const navigation = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [records,setRecords] = useState(getData())  
    
    useEffect(()=>{
        localStorage.setItem('records',JSON.stringify(records))
    },[records])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(name === '' || email === '' || password === ''){
            alert('Fill all Fields')
        }
        else{
            let data = {
                name,email,password
            }
            setRecords([...records,data]);
            setTimeout(()=>{
                navigation('/Login');
            },1000)
        }
    }
    

    return (
        <div>
            <div className="container">
                <h1>Signup Page</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Name: </label>
                        <input type="text"  name='name' value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Email: </label>
                        <input type="text"  name='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Password: </label>
                        <input type="password"  name='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <br />
                    <button type="submit" > Signup</button>
                </form>
            </div>
            {/* {records.map(item=>(
                <div>
                    {console.log("dws",item)}
                    <h1>Name: {item.name}</h1>
                    <h1>email: {item.email}</h1>
                    <h1>pswd: {item.password}</h1>
                </div>
            ))} */}
        </div>
    )
}

export default Signup