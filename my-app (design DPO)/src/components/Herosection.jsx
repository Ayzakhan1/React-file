import React from 'react'
import slideimg from './../accests/images/benefits_subimage_5.jpg';
import lefftarrow from './../accests/images/arrow-left-slider.png';
import righttarrow from './../accests/images/arrow-right-slider.png';

const Herosection = () => {
  return (
    <div className='Herosection'>
     <div className="container">
        <div className="herosection_content">
            <h1>Design Your Dream Home...</h1>
            <h1>At Your Fingertips</h1>
            <button>Explore More</button>
        </div>
        <div className="herosection_slider">
            <div className="slider_img">
              <img src={slideimg}></img>
            </div>
           <div className="navs">
           <div>
                <img src={lefftarrow}></img>
            </div>
            <div>
                <img src={righttarrow}></img>
            </div>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Herosection
