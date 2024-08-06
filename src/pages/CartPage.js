import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import { productLists } from '../data';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, addToCart, removeFromCart ,deleteCart} = useContext(ShopContext);
    console.log(cartItems);
    const cartProductList = productLists.filter(product => cartItems[product.id] > 0);
    console.log(cartProductList)



    // const handleDelete = (id)=>{
    //     const filterProduct = productLists.filter(product => cartItems[product.id] !== id) ;
    //     console.log(filterProduct)
    // }
    return (

        <div className='cart-container'>
            <h2>Shopping Cart</h2>
            {cartProductList.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='cart-items'>

                    {cartProductList.map(product => {

                   
                        const shortDescription = product.productName.length > 20
                                ? product.productName.substring(0, 20) + '..' 
                                : product.productName;
                        
                        return (

                       
                        <div key={product.id} className='cart-item-container' >

                            <div className='cart-item'>

                                <img src={product.image} alt={product.productName} />
                                <h4>{shortDescription }</h4>
                            </div>

                            <div className='cart-item-controls'>

                                <button onClick={() => removeFromCart(product.id)}><FaMinus /></button>
                                <span>{cartItems[product.id]}</span>
                                <button onClick={() => addToCart(product.id)}><FaPlus /></button>
                            </div>

                            <div className='cart-item-price'>
                                <p>{product.price}</p>
                            </div>
                            <div>
                                <button className='delete-product' onClick={()=> deleteCart(product.id)}>Delete product</button>
                            </div>
                          

                        </div>
                    )
                     })}
                    {/* <div className='payment'>

</div> */}
                    <button></button>
                </div>
            )}
            
        </div>
    );
};

export default CartPage;
