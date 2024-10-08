import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './assests/pages/Home';
import Manage from './assests/pages/Manage';
import { Provider } from 'react-redux';
import { store } from './firebaseStore/firebaseStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/manage',
    element: <Manage/>
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
