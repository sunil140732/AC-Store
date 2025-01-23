import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../store/StoreContext'
import { toast } from 'react-toastify'

const ProductDetails = () => {
    // getting the id from the products
    const {id}=useParams()
    const [product,setProduct]=useState({})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    // useEffect for fetching the data from an Api
    useEffect(()=>{
        const fetchproducts=async()=>{
          try {
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    

        // calling the function to fetch the products
        fetchproducts()

    },[id]) // fetch only once the data at initial load

    // handling addtocart functionality
    function handleAddToCart(){
      // console.log(product)
      dispatch({type:"ADD_TO_CART",payload:product})
      toast.success("Added items to the cart")
    }

    const {image,title,price,description}=product
    let {dispatch}=useCart()
    

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;
  
  return (
      <div className='container d-flex justify-content-center align-center my-5'>
        <div class="card my-4 p-4" style={{ width:'700px', height:'350px' }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="..." style={{width:'100%',height:'250px'}}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">${price}</p>
              <p class="card-text">{description}</p>
              <p class="card-text"><small class="btn btn-success" onClick={handleAddToCart}>Add To Cart</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ProductDetails   