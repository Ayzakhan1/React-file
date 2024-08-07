import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import ContactUs from './components/pages/ContactUs';
import Routelayout from './components/routelayout/Routelayout';


// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/about',
//     element: <Aboutus/>
//   },
//   {
//     path: '/contact',
//     element: <ContactUs/>
//   }
// ])

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Routelayout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<Aboutus/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      </Route>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
