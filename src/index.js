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
import ExternalCallItem from './components/externalCallItem';
import Coffee from './pages/coffee';
import CoffeeItems from './pages/coffeeItems';

const router = createBrowserRouter([
  {path:"/", element: <HomePage />},
  {path:"/dashboard", element: <Dashboard />},
  {path:"/contact", element: <Contact />},
  {path:"/contact/:id", element: <ExternalCallItem />},
  {path:"/about", element: <Coffee />},
  {path:"/coffee", element: <Coffee />},
  {path:"/coffee/:id", element: <CoffeeItems />},
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
