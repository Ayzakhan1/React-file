import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, set } from 'firebase/database';
import { firebaseapp } from './assests/firebaseConfigue/FirebaseConfigue';

function App() {

const addData =()=>{
  const db = getDatabase(firebaseapp);
  const userRef = ref(db, 'users/'+ Math.floor(Math.random() * 9999 * 10000));

  const userdata = {
    name:'Aiza',
    age: 28,
    email: 'aiza@mail.com'
  
  }
  
  set( userRef, userdata);
}



  return (
    <div className="App">
    <button onClick={addData}>add data</button>
    </div>
  );
}

export default App;
