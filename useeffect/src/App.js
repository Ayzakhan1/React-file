import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [length, setlength] = useState('8');
const [password, setpassword] = useState('');
const [ifupper, setifupper] = useState(false);
const [ifnumber, setnumber] =useState(false);
const [ifsplchar, setsplchar] =useState(false);


const genpassword =()=>{

  let str = 'abcdefghijklmopqrstuvwxyz';
  
  if(ifupper) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(ifnumber) str += '1234567890';
  if(ifsplchar) str += '~!@#$%^&*_+<>?/|\/';

  
  let pass = '';

  for(let i = 1; i <= length; i++){
     let random = Math.floor(Math.random() * str.length);
    pass += str[random]; 
  }
  setpassword(pass)
}
const copytext = ()=>{
  navigator.clipboard.writeText(password);
}

useEffect(()=>{
  genpassword();
}, [length,ifupper , ifnumber, ifsplchar])

  return (
   <>
    <div className='box bg-warning rounded p-4'>
     <div className='row justify-content-around py-2'>
     <input type='text' value={password} className='col-8 rounded py-2 border-danger' />
     <button onClick={copytext}  className='col-3 rounded border-danger'>Copy</button>
     </div>

      <div>
     <div>
     <input type='range' onChange={(e)=>{setlength(e.target.value)}} min={6} max={25} value={length}/>
     <label>Length <span>{length}</span> </label>
     </div>

      <div>
      <input type='checkbox' onChange={(e)=>{setifupper (e.target.checked)}}/>
      <label>Uppercase</label>
      </div>
      <div>
      <input type='checkbox' onChange={(e)=>{setnumber (e.target.checked)}}/>
      <label>Number</label>
      </div> 
      <div>
      <input type='checkbox' onChange={(e)=>{setsplchar (e.target.checked)}}/>
      <label>Special Character</label>
      </div>
      
      </div>
    </div>
   </>
  );
}

export default App;
