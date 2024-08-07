import React from 'react'

const Categorires = ({details}) => {
    console.log(details)
  return (
    <div className='categories'>
        <h1>Explore Categories</h1>
    <div className="cards">
    {
        details.map((item)=>(
            <div className='cart_card'>
            <div>
                <img src={item.img}></img>
              </div>
              <div>
                <p>{item.title}</p>
              </div>
            </div>
        ))
    }
           
           
    </div>
           <button>See all</button>
    </div>
  )
}

export default Categorires
