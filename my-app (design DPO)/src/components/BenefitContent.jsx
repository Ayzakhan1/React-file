import React from 'react'

const BenefitContent = ({content}) => {
  return (
    <div className='benifit_content'>
      <img src={content.subImg}></img>
      <h1>{content.title}</h1>
      <button>{content.btn}</button>
    </div>
  )
}

export default BenefitContent
