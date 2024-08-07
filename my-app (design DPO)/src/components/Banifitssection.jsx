import React from 'react'
import Benefitimg from './Benefitimg'
import BenefitContent from './BenefitContent'

const Banifitssection = ({details}) => {

  // console.log(details)
  return (
    <div className='Banifits_section'>
      <div className="container">
        <h1>Benifits You Get When Using</h1>
    
     
      {
        details.map((item)=>(
          <div className='benifit_inner'>
          <Benefitimg imgUrl={item.img}/>
          <BenefitContent content={item.content} />
        </div>
        ))
      }
       </div> 
    </div>
  )
}

export default Banifitssection
