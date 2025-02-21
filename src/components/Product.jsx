import React from 'react'
import { Link } from 'react-router-dom'  // Link is used for navigation.
import { useCart } from '../store/StoreContext' //useCart allows access to the cart context.
import { toast } from 'react-toastify' //toast is used for showing notifications.
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate();  // Uses navigate to redirect users
  // console.log('productcard:',product)
  const {id,image,title,price,description, rating: { rate, count }}=product

  let cardtitle=title.length<=51?title:title.slice(0,50)  // Shortens the product title if it is too long

  let {dispatch}=useCart()

  // If user is not logged in, redirect to login page
  if (!localStorage.getItem('user')) {
    navigate('/login');
  }

  // handling addtocart functionality
  function handleAddToCart(product){
    dispatch({type:"ADD_TO_CART",payload:product})
    toast.success("Added items to the cart")
  } // Dispatches an action to add the item to the cart


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
