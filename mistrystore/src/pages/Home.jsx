import React, { useState } from 'react'
import Header from '../components/commoncomponents/Header'
import Introimg from './../assests/images/collections-no-bg.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";

import slideimg1 from './../assests/images/collections_banner.jpg';
import slideimg2 from './../assests/images/deliveryPackageBanner.jpg';
import slideimg3 from './../assests/images/500+Coupon+Banner.png';
import slideimg4 from './../assests/images/Low+Price+Challenge+Banner.png';
import slideimg5 from './../assests/images/grillbannersmall.png';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { MdContactPhone } from 'react-icons/md';
import { LuCalendarSearch, LuPackageSearch } from 'react-icons/lu';
import slideicon1 from './../assests/images/Tesla.png';
import slideicon2 from './../assests/images/duro.png';
import slideicon3 from './../assests/images/greenpanel.png';
import slideicon4 from './../assests/images/greenply.png';
import slideicon5 from './../assests/images/CommercialLogo.png';
import slideicon6 from './../assests/images/crossbond-logo.png';
import icon1 from './../assests/images/image+253.png';
import enginearpic from './../assests/images/engineer.png';
import iconA from './../assests/images/send-req-home.svg';
import iconB from './../assests/images/rev-quote-home.svg';
import iconC from'./../assests/images/del-support-home.svg';
import dots from './../assests/images/dot-grid-gray.png';
import painters from './../assests/images/three-painters.png';
import underline from './../assests/images/underline.png';
import boximg1 from './../assests/images/excl-network.svg';
import boximg2 from './../assests/images/excl-loyality.svg';
import boximg3 from './../assests/images/excl-refer.svg';
import boximg4 from './../assests/images/excl-disc.svg';
import reddots from './../assests/images/red-dot-grid.png';
// import boxes1 from './../assests/images/community-bg.png';
// import boxes2 from './../assests/images/bg-gray-block-left-72.png';
 import electricimg1 from './../assests/images/elctricals1.svg';


const Home = () => {

  const [slidervelocity , setvelocity] = useState(100);
  let slider1 = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
   responsive:[
     {
      breakpoint:992,
      slider1:{
        slidesToShow: 2,
      }
     },
      
     {
      breakpoint:667,
      slider1:{
        slidesToShow: 1,
      }
     }
   ]
  };
  let slider2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true

  };

  const[activebtn , setactivebtn] = useState('electricals');
  return (
    <div>
      <Header/>
      <div className="container intro_banner">
           <h3>INTRODUCING</h3>
            <div className='intro_inner'>
            <img src={Introimg}/>
            </div>
            <p>A curated collection of trending interior materials,</p>
          <p>tailored exclusively for all Architects, Interior Designers & Contractors</p>
         <div style={{fontWeight:'500'}}>
         Decorative Wall Panels | Louvers | Modular Hardware & Accessories | Laminates | Flooring Solutions | Invisible Grille
         </div>
      </div>
      <div className='container-fluid mt-5 slider1'>
      <Slider {...slider1}>
      <div className='slider px-2'>
          <div>
          <img src={slideimg1}/>
          </div>
      </div>
      <div className='slider px-2'>
         <div>
         <img src={slideimg2}/>
         </div>
      </div>
      <div className='slider px-2'>
          <div>
          <img src={slideimg3}/>
          </div>
      </div>
      <div className='slider px-2'>
          <div>
          <img src={slideimg4}/>
          </div>
      </div>
      <div className='slider px-2'>
          <div>
          <img src={slideimg5}/>
          </div>
      </div>
    </Slider>
      </div>
      <div className='container slider2 pb-5'>
      <h6>Explore Our Prices</h6>
      <Slider {...slider2}>
      <div className='px-3'>
        <div  className='slidecard text-center py-4'>
         <div className='sliderimg d-flex justify-content-center'>
           <img src={slideicon1} />
           </div>
          <h6>18mm Tower Plywood</h6>
          <p className='starting'>Starting From</p>
          <p className='amount m-0'>₹51/-</p>
          <span >per sqft</span>
        </div>
      </div>
      <div className='px-3'>
        <div  className='slidecard text-center py-4'>
         <div className='sliderimg d-flex justify-content-center'>
           <img src={slideicon2} />
           </div>
          <h6>17mm MDF</h6>
          <p className='starting'>Starting From</p>
          <p className='amount m-0'>₹85/-</p>
          <span >per sqft</span>
        </div>
      </div>
      <div className='px-3'>
        <div  className='slidecard text-center py-4'>
         <div className='sliderimg d-flex justify-content-center'>
           <img src={slideicon4} />
           </div>
          <h6>18mm Ecotec MR Plywood</h6>
          <p className='starting'>Starting From</p>
          <p className='amount m-0'>₹88/-</p>
          <span >per sqft</span>
        </div>
      </div>
      <div className='px-3'>
        <div  className='slidecard text-center py-4'>
         <div className='sliderimg d-flex justify-content-center'>
           <img src={slideicon1} />
           </div>
          <h6>HDHMR 16.75 mm</h6>
          <p className='starting'>Starting From</p>
          <p className='amount m-0'>₹76/-</p>
          <span >per sqft</span>
        </div>
      </div>
      <div className='px-3'>
        <div  className='slidecard text-center py-4'>
         <div className='sliderimg d-flex justify-content-center'>
           <img src={slideicon1} />
           </div>
          <h6>18mm plain particle..</h6>
          <p className='starting'>Starting From</p>
          <p className='amount m-0'>₹39/-</p>
          <span >per sqft</span>
        </div>
      </div>
      <div className='px-3'>
        <div  className='slidecard text-center py-4'>
         <div className='sliderimg d-flex justify-content-center'>
           <img src={slideicon6} />
           </div>
          <h6>17mm MDHMR</h6>
          <p className='starting'>Starting From</p>
          <p className='amount m-0'>₹74/-</p>
          <span >per sqft</span>
        </div>
      </div>
      <div className='px-3'>
        <div  className='slidecard text-center py-4'>
         <div className='sliderimg d-flex justify-content-center'>
           <img src={slideicon3} className='w-75'/>
           </div>
          <h6>17mm MDWR</h6>
          <p className='starting'>Starting From</p>
          <p className='amount m-0'>₹77/-</p>
          <span >per sqft</span>
        </div>
      </div>
      <div className='px-3'>
        <div  className='slidecard text-center py-4'>
         <div className='sliderimg d-flex justify-content-center'>
           <img src={slideicon3} className='w-75' />
           </div>
          <h6>17mm MDHMR</h6>
          <p className='starting'>Starting From</p>
          <p className='amount m-0'>₹50/-</p>
          <span >per sqft</span>
        </div>
      </div>
    </Slider>
      </div>
      <div  className='free-main'>
        <div className='free-div '>
          <div className='imgframe'>
            <img src={icon1} style={{width:'50px'}}/>
          </div>
          <div className='ms-2 mt-2'>
            <h6 className='free-heading'>FREE DELIVERY</h6>
            <p className='mb-0'>Subscribe to our delivery package to enjoy...</p>
          </div>
        </div>
        <div className='free-div'>
        <div className='imgframe'>
            <img src={icon1} style={{width:'50px'}}/>
          </div>
          <div className='ms-2 mt-2 '>
            <h6 className='free-heading'>WELCOME500</h6>
            <p className='mb-0 '>Save Rs 500</p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:'yellow', color:'red', marginTop:'30px' }}>
  <Marquee velocity={slidervelocity} minScale={0.7} resetAfterTries={200}>
    {times(1, Number).map((id) => (
   
        <div style={{display:'flex'}}className='py-2' onMouseEnter={()=>{setvelocity(0)}} onMouseLeave={()=>{setvelocity(100)}}>
          <div className='ineer_marqye'>
         <div className='marque_icon'><FaIndianRupeeSign/></div>  <div className='mx-2'> Always Low Prices</div>
          </div>
          <div className='ineer_marqye'>
        <div className='marque_icon'> <MdContactPhone/></div>  <div className='mx-2'>  Dedicated Relationship manager</div>
          </div>
          <div className='ineer_marqye'>
          <div className='marque_icon'><LuPackageSearch/> </div>   <div className='mx-2'>Multi Category Store</div>
          </div>
          <div className='ineer_marqye'>
          <div className='marque_icon'> <LuCalendarSearch/> </div>   <div className='mx-2'>implified Logistics</div>
          </div>
        </div>
    
    ))}
  </Marquee>
     </div>;
     <div className="requirement">
      <div className="require_img">
        <img src={enginearpic} className='w-70'/>
      </div>
      <div className="require_content">
        <p>
        <span className=''>Share your requirements </span>
         & <br />
        get your Estimate <br />
        within <span>4 hrs</span>
        </p>
       <button>Order Now</button>
      </div>
     </div>
     <div className="mistry-work position-relative">
     <div className="work_inner ">
     <h1>Here’s how Mistry.Store works</h1>
     <h3 className='pb-3'>All your home building materials, just a few steps away!</h3>
      <div className="work_inner_main ">
        <div className="work_content">
          <div className='d-flex align-items-center mt-5'>
            <div className='work_img'>
              <img src={iconA}></img>
            </div>
            <div className='work_text'>
              <h6>Search & send your requirements</h6>
              <p>Send your product requirements by sharing images, adding items from our master list, call your RM or Whatsapp</p>
            </div>
          </div>
          <div className='d-flex align-items-center mt-5'>
            <div className='work_img'>
              <img src={iconB}></img>
            </div>
            <div className='work_text'>
              <h6>Review & confirm order</h6>
              <p>Review the quote and confirm your order</p>
            </div>
          </div>
          <div className='d-flex align-items-center mt-5'>
            <div className='work_img'>
              <img src={iconC}></img>
            </div>
            <div className='work_text'>
              <h6>Get delivery support</h6>
              <p>See realtime status and get end-to-end support for delivery onsite</p>
            </div>
          </div>
        </div>
        <div className="work_video"></div>
      </div>
     </div>
     <div className="p_img position-absolute">
        <img src={dots}></img>
      </div>
     </div>
     <div className=" painters">
      <div className="require_img">
        <img src={painters} className='w-70'/>
      </div>
      <div className="require_content">
        <p>
        <span className=''>Refer Fellow Professionals </span>
         <br />
         & Earn Referral Benefits <br />
        </p>
       <button>Refer Now</button>
      </div>
     </div>
     <div className="register">
     <div className="register_inner d-flex justify-content-between align-items-center py-5">
      <div className="register_left position-relative">
        <p className='text-align-right'> Register with us and get <br /> access to a world of <br /> exclusive <span>PRO Benefits</span></p>
        <img src={underline}></img>
        {/* <div className="left-img position-absolute">
          <img src={boxes1}></img>
        </div> */}
      </div>
      <div className="register_right position-relative">
        <div className="box">
          <div className="box_img">
            <img src={boximg1}></img>
          </div>
          <div className="box_content">
            <h6>Networking Event Invites</h6>
            <p>Exclusive Access to Premier Industry Events</p>
          </div>
        </div>
        <div className="box">
          <div className="box_img">
            <img src={boximg2}></img>
          </div>
          <div className="box_content">
            <h6>Loyalty Points on Every Purchase</h6>
            <p>Shop more! <br />
            Earn more!</p>
          </div>
        </div>
        <div className="box">
          <div className="box_img">
            <img src={boximg3} className='w-100 mb-3'></img>
          </div>
          <div className="box_content">
            <h6>Refer & Earn Schemes</h6>
            <p>Share and save with our referral program.</p>
          </div>
        </div>
        <div className="box">
          <div className="box_img">
            <img src={boximg4}></img>
          </div>
          <div className="box_content">
            <h6>Additional Discounts on Every Purchase</h6>
            <p>Save more on every buy with exclusive discounts!</p>
          </div>
        </div>
        <div className='dots position-absolute'>
          <img src={reddots}/>
        </div>
      </div>
     </div>
     </div>
     <div className="fluid-container ">
      <div className="container tabbing p-5">
        <h1 className='pb-4'>Trusted by <span className='text-danger'>75+ Brands</span></h1>
        <div className="tab-head">
          <button className={`rounded-pill fw-semibold border border-dark-subtle px-4 py-2 me-3 ${(activebtn === 'electricals') ? 'active-tab-btn' : ''}`}>Electricals</button>
          <button className={`rounded-pill fw-semibold border border-dark-subtle px-4 py-2 me-3`}>Paints</button>
          <button className={`rounded-pill fw-semibold border border-dark-subtle px-4 py-2 me-3`}>Wood materials</button>
          <button className={`rounded-pill fw-semibold border border-dark-subtle px-4 py-2 me-3`}>Hardware and plumbring</button>
        </div>
        <div className="tab-body"></div>
      </div>
     </div>
    

    </div>
  )
}


export default Home
