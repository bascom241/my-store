import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import CheckoutPage from './pages/CheckoutPage';
import ShopContextProvider from './context/shop-context'
import CartPage from './pages/CartPage'

const router = createBrowserRouter(
   [
      {
         path:'/',
         element:<Layout/>,
         errorElement:<ErrorPage/>,
         children:[
            {index:true,element:<Home/>},
            {path:'cart',element:<CartPage/>},
            {path:'checkout',element:<CheckoutPage/>},   
            
         ]
      }
   ]
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <ShopContextProvider>
   <RouterProvider router={router} />
   </ShopContextProvider>
)