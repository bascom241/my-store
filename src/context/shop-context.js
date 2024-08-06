import React, { createContext, useState, useEffect } from 'react';
import { productLists } from '../data';

export const ShopContext = createContext(null);

const getItems = () => {
    let cart = {};
    for (let i = 1; i < productLists.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
       
        // Load cart from local storage if it exists, otherwise initialize with getItems
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : getItems();
    });

    console.log(cartItems)
    const saveCartToLocalStorage = (items) => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            saveCartToLocalStorage(updatedCart);
            return updatedCart;
        });
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = {
                ...prev,
                [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0
            };
            saveCartToLocalStorage(updatedCart);
            return updatedCart;
        });
    }

 
    const deleteCart = (id) => {
        setCartItems((prevItems) => {
            const entries = Object.entries(prevItems);
            const filteredEntries = entries.filter(([key, value]) => parseInt(key) !== id);
            const updatedItems = Object.fromEntries(filteredEntries);
            saveCartToLocalStorage(updatedItems)
            return updatedItems;
        });
    };
    const contextValue = { cartItems, addToCart, removeFromCart,deleteCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
