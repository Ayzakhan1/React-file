import React from 'react'

const Propscomponents = (abc) => {
    console.log(abc)
  return (
    <div>
      <h1>{abc.name}</h1>
        {abc.children}
      <h1>{abc.age}</h1>
    </div>
  )
}

export default Propscomponents
