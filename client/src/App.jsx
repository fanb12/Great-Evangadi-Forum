
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Regiter from './pages/Regiter';
import { useEffect,useState } from 'react';
import axios from './axiosConfig';

function App() {
  const token=localStorage.getItem('token')
  const navigat=useNavigate()
  async function checkUser(){
    try {
      const {data}=await axios.get('users/check',{
        headers:{
          Authorization:token,
        }
      })
    } catch (error) {
      console.log(error.response)
      navigat('/login')
    }
  }

  useEffect(()=>{
    checkUser();
  },[])
  return (
    <div >
      <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/register' element={ <Regiter/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
