import React from 'react'
import { useCart } from '../store/StoreContext'
import { NavLink,useNavigate } from 'react-router-dom';

const Cart = () => {
  const {state,dispatch}=useCart()
  const {cart}=state
  const navigate = useNavigate();

  // If user is not logged in, redirect to login page
  if (!localStorage.getItem('user')) {
    navigate('/login');
  }

  // calculate the total amount
  const totalAmount=cart.reduce((acc,item)=>acc+item.price*item.quantity,0)

  // function for Handling the Increment
  function handleIncrement(productId){
    dispatch({type:"INCREMENT",payload:{id:productId}})
    toast.success("Items is Incrementer to the cart")
  }

  // function for Handling the Decrement
  function handleDecrement(productId){
    dispatch({type:"DECREMENT",payload:{id:productId}})
    toast.success("Item is Decremented from the cart")
  }

  // function for Handling the Remove
  function handleRmove(productId){
    dispatch({type:"REMOVE_ITEM_IN_CART",payload:{id:productId}})
    toast.success("item is removed from the cart")
  }

  return (
    <div className='container'>
      <div className="row">
        {
          cart.length>0?(cart.map((item)=>(
            <div className='col-12 col-sm-12 col-md-3 col-lg-3 my-4'>
              <div class="card shadow p-3" style={{height:'550px'}} >
                  <img src={item.image} class="card-img-top" alt="..." style={{width:'100%',height:'250px'}}/>
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">Price: ${item.price}</p>
                    <p class="card-text">Quantity: {item.quantity}</p>
                    <p class="card-text">Subtotal: ${item.price*item.quantity}</p>
                    <button className='btn btn-outline-success mx-2' onClick={()=>handleIncrement(item.id)}>➕</button>
                    <button className='btn btn-outline-warning ' onClick={()=>handleDecrement(item.id)}>➖</button>
                    <button className='btn btn-outline-danger mx-2' onClick={()=>handleRmove(item.id)}>❌</button>
                  </div>
              </div>
            </div>
          ))):(<h1>Cart Is Empty</h1>)
        }
        {
          cart.length>0&&(
            <div className='row'>
              <div className="col-12">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                {/* Payment Button */}
                <NavLink to="/payment">
                  <button className="btn btn-primary mt-3">Proceed to Payment</button>
                </NavLink>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart

