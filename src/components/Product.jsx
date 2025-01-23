import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../store/StoreContext'
import { toast } from 'react-toastify'

const ProductCard = ({product}) => {
  // console.log('productcard:',product)
  const {id,image,title,price,description,rating:{rate,count}}=product

  let cardtitle=title.length<=51?title:title.slice(0,50)

  let {dispatch}=useCart()

  // handling addtocart functionality
  function handleAddToCart(product){
    // console.log(product)
    dispatch({type:"ADD_TO_CART",payload:product})
    toast.success("Added items to the cart")
  }


  return (
    <div className='col-12 col-sm-12 col-md-3 col-lg-3 my-4'>
      
        <div class="card shadow p-3" >
        <Link to={`/shop/${id}`} className='nav-link'>
          <img src={image} class="card-img-top" alt="..." style={{width:'100%',height:'250px'}}/>
          <div class="card-body">
            <h5 class="card-title">{cardtitle}</h5>
            <p class="card-text">{price}</p>
          </div>
        </Link>
        <button className='btn btn-success' onClick={()=>handleAddToCart(product)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCard
