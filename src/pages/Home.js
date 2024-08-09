import React, { useContext } from 'react'
import heroSection from '../images/heroImage3.jpeg'
import { productLists } from '../data';
import { FaPlus } from 'react-icons/fa'
import { ShopContext } from '../context/shop-context';
import { FaMinus } from 'react-icons/fa';
import './Home.css'
import { useState } from 'react'
const Home = () => {
const {addToCart,removeFromCart,cartItems} = useContext(ShopContext)
const [lists,setLists] = useState(productLists);



  const [filter,setFilter] = useState('');
  const handleSetFilter = (e)=>{
    setFilter(e.target.value);
  }

  const filterProducts = lists.filter(list => list.productName.toLowerCase().includes(filter.toLowerCase()))



  return (
    <div className='container'>
      <div className='imageContainer'>
        <img src={heroSection} />
      </div>

      <div className='content'>
        <h2>Explore our Explicitive Product</h2>
        <p>Viscon is an online platform where we take you on a journey of Explicitive and endless satisfaction
          Our Customers staisfaction is our top priority.
          Lets get started
        </p>
        <ul className='category_lists'>
        <div className='div1'>
        <li>Nike</li>
          <li>Adidas</li>
          <li>Puma</li>
          <li>Others</li>
          <li>Shirts</li>
        </div>
         

          
          <div className='P.T.S'>
            <input
              className='search-input'
              placeholder='search-products'
              value={filter}
              onChange={handleSetFilter}
            />
          </div>
        </ul>

      </div>
      <div className='product_lists'>



        <h2 className='top-product'>Our Top Products</h2>



        <div className='product_box'>


          {filterProducts.map(productList => (
            <div key={productList.id} >
              <img src={productList.image} alt='' />
              <button className='addToCart2' onClick={()=>removeFromCart(productList.id)}><FaMinus /></button>
              <button className='addToCart' onClick={()=>addToCart(productList.id)}><FaPlus /></button>
              <div className='p-rating'>
                <h4>{productList.productName}</h4>
                <p>{productList.rating}</p>
              </div>
              <p>{productList.discription}</p>
              <b><p>{productList.price}</p></b>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Home
