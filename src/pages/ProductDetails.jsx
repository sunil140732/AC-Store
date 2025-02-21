import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../store/StoreContext';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  // Getting the id from the URL params
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { dispatch } = useCart();

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
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
    fetchProduct();
  }, [id]);

  // Handling add to cart functionality
  function handleAddToCart() {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Added to cart!");
  }

  if (loading) return <h1 className="text-center">Loading...</h1>;
  if (error) return <h1 className="text-center text-danger">Error: {error}</h1>;

  return (
    <div className="container d-flex justify-content-center align-items-center my-4">
      <div className="card p-4 shadow-lg w-100 w-md-75" style={{ maxWidth: '600px'}}>
        <div className="row g-2">
          {/* Image Section */}
          <div className="col-md-4 col-12 d-flex justify-content-center">
            <img 
              src={product.image} 
              className="img-fluid rounded mx-auto d-block" 
              alt={product.title} 
              style={{ maxHeight: '200px', objectFit: 'contain',width:'100%' }} 
            />
          </div>

          {/* Details Section */}
          <div className="col-md-6 col-12 d-flex flex-column gap-2">
            <div className="card-body d-flex flex-column h-100" >
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text text-muted">${product.price}</p>
              <p className="card-text">{product.description}</p>
              <button className="btn btn-success mt-auto w-100" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
