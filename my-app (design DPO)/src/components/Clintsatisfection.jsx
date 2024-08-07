import React from 'react'
import pinkimg from './../accests/images/testimonial_1679922791.jpg'
import img_icon from './../accests/images/testimonial-double-coat.png'
import icon_img from './../accests/images/user_1679922791.jpg'
const clintsatisfection = () => {
  return (
    <div className='clint'>
      <h1>Happy and Satisfied Clients</h1>
      <div className="clint_main">
        <div></div>
        <div className='pink'>
         <div className="pink_main">
         <div className="pink_img">
                <img src={pinkimg}></img>
                <div className="img_icon">
                    <img src={img_icon}></img>
                </div>
            </div>
            <div className="pink_content">
         <div className='contact_main'>
         <h2>The Best Mobile Catlogue</h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi fugit iusto voluptas tenetur ad tempore dolor exercitationem, nisi incidunt!</p>
         <div className='content_bottom'>
          <div className="b_img">
            <img src={icon_img}></img>
          </div>
          <div className="b_content">
            <span>Rimeash Veshwakarma</span>
            <p>Carpenter</p>
          </div>
         </div>
         </div>
         </div>

            </div>
        </div>

      </div>


    </div>
  )
}

export default clintsatisfection
