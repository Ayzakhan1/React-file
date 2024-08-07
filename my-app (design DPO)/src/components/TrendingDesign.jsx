import React from 'react'

const TrendingDesign = ({data}) => {
  return (
    <div className='Trending_design'>
      <h1>Trending More Design</h1>
      <div className="tab_content">
        <ul>
            <li>All Design</li>
            <li>Bed Design</li>
            <li>Wardrobe Designs</li>
            <li>TV Unit Designs</li>
            <li>Modular Kitchen Designs</li>
            <li>Bedroom Designs</li>
            <li>Children Bedroom Designs</li>
        </ul>
      </div>
       <div className='life_main'>
        <div className="life"></div>
       </div>

       <div className='trending_main'>
        {
            data.map((item)=>(
                <div className='main_card'>
                <div>
                    <img src={item.img}></img>
                </div>
                <div className="overlay">
                <p>{item.title}</p>
                </div>
                <div className="title">
                {/* <p>{item.title}</p> */}
                </div>
              </div>
            ))
        }
     
    </div>
    </div>
  )
}

export default TrendingDesign
