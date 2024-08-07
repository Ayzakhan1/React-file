import React from 'react'
import designimg from './../accests/images/benefits_title_image.jpg';

const NewDesign = () => {
  return (
    <div className='newDesign'>
      <h1>Designs That Define You</h1>
      <div className="imgbox">
        <img src={designimg}></img>
      </div>
    </div>
  )
}

export default NewDesign
