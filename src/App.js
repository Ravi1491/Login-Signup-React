import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Profile from './Component/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile:username' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
