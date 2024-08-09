import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useState,useRef } from 'react';
import { FaCartPlus } from 'react-icons/fa'

import { ShopContext } from '../../context/shop-context';
import  {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import './NavBar.css'
const NavBar = () => {
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);


    const totalItemsInCart = Object.values(cartItems).reduce((acc, item) => acc + item, 0);


    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right = '0'
    }

    const closeMenu = () =>{
        menuRef.current.style.right = '-800px'
      
    }
    return (
        <nav className='nav_container '>
            <Link to='/' className='h2'><h2>Viscon </h2>
        
            </Link>
            <FaBars className='nav-open' onClick={openMenu}/>
            <ul   ref= {menuRef} className='div_container'>
               <AiOutlineClose className='nav-close' onClick={closeMenu}/>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Categories</Link></li>
                    <li><Link to='/'>Contact us </Link></li>
                  
               


                
                    <Link className='link1' to='/login'>login</Link>
                    <Link className='link2' to='/register'>Register</Link>
                    <Link className='link3' to='/cart'>
                        <FaCartPlus  onClick={closeMenu}/>
                        {totalItemsInCart > 0 && <span className='count'>{totalItemsInCart}</span>}
                    </Link>
                
            </ul>





        </nav>
    )
}

export default NavBar
