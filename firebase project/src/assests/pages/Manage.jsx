import React from 'react'

const Manage = () => {
  return (
    <div>
      <Link to='/' >Home</Link>

      <div style={{
        display: 'grid',
        gridTemplateColumns:'1fr, 3fr'
      }}>

        <div>
            <h1 style={{textAlign:'center'}}>MCQs</h1>
         <foam>
            <label>Questions</label>
            <input type='text' name='question'/>
            <label>Option 1</label>
            <input type='text' name='01'/>
            <label>Option 2</label>
            <input type='text' name='02'/>
            <label>Option 3</label>
            <input type='text' name='03'/>
            <label>option 4</label>
            <input type='text' name='04'/>
            <label>Corect option</label>
           <select name='correct'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
           </select>

           <button>Add Data</button>
         </foam>
        </div>

      </div>
    </div>
  )
}

export default Manage
