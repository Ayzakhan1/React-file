import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setformData] = useState({
    name:'',
    email:'',
    password:'',
    changepassword:''
  });
  
  // const changeValue = (e)=>{  setformData({...formData, name:e.target.value})};
 const handleClick = (e)=>{
  e.preventDefault();

  console.log(formData)
 }
  return (
    <>
    <form>
      <label>Name</label>
      <input type='text' id='name' onChange={ (e)=>{  setformData({...formData, name:e.target.value})}} value={formData.name}/>
      <label>Email</label>
      <input type='text' id='email'onChange={(e)=>{  setformData({...formData, email:e.target.value})}} value={formData.email}/>
      <label>Password</label>
      <input type='password' id='password'onChange={(e)=>{  setformData({...formData, password:e.target.value})}} value={formData.password}/>
      <label>Change Password</label>
      <input type='password' id='change password'onChange={ (e)=>{  setformData({...formData, changepassword:e.target.value})}} value={formData.changepassword}/>
      <button onClick={handleClick}>Submit</button>
    </form>
    </>
  );
}

export default App;
