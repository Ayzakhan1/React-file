import React from 'react'
import Header from '../commoncomponents/Header'
import { Outlet } from 'react-router-dom'

const Routelayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Routelayout
