import { getDatabase, ref, set } from 'firebase/database';
import React from 'react'
import { Link } from 'react-router-dom'
import { firebaseapp } from '../firebaseConfigue/FirebaseConfigue';

const Manage = () => {

   const handleaddquest =(e)=>{
      e.preventDefault();

      const data ={
        question: e.target.question.value,
        o1: e.target.o1.value,
        o2: e.target.o2.value,
        o3: e.target.o3.value,
        o4: e.target.o4.value,
        correct: e.target.correct.value
      }
      console.log(data);

     try{
       const db = getDatabase(firebaseapp);
       const Mcqsref = ref(db, 'mcqs/'+ Math.floor(Math.random() * 9999 * 10000));
       set(Mcqsref, data)

       alert('data added successfully')
     }
     catch(error){
         console.log(error)

         alert('something went wrong')
     }


   }

  return (
   <>
   <div>
    <Link to='/'>Home</Link>
   </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns:'1fr 3fr'
      }}>

        <div className='foam-div'>
            <h1 style={{textAlign:'center'}}>MCQs</h1>
            <form onSubmit={handleaddquest}>
            <label>Questions</label>
            <input type='text' name='question'/>
            <label>Option 1</label>
            <input type='text' name='o1'/>
            <label>Option 2</label>
            <input type='text' name='o2'/>
            <label>Option 3</label>
            <input type='text' name='o3'/>
            <label>option 4</label>
            <input type='text' name='o4'/>
            <label>Corect option</label>
           <select name='correct'>
            <option value='1'>option :1</option>
            <option value='2'>option :2</option>
            <option value='3'>option :3</option>
            <option value='4'>option :4</option>
           </select>

           <button>Add Data</button>
         </form>
        </div>
         <div></div>
      </div>
      </>
  )
}

export default Manage
