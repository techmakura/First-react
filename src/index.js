import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Card from './components/card';
import HomePage from "./pages/home";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact";
import AboutUs from "./pages/about";
import NotFound from './pages/notfound';

const router = createBrowserRouter([
  {path:"/", element: <HomePage />},
  {path:"/dashboard", element: <Dashboard />},
  {path:"/contact", element: <Contact />},
  {path:"/about", element: <AboutUs />},
  {path:"*", element:<NotFound />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
