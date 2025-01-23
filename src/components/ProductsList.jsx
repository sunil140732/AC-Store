import React, { useState, useEffect  } from 'react';
import Filter from './Filter';

const ProductsList = () => {
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setAllProducts(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);


  const handleFilter = (filterCriteria) => {
    setFilters(filterCriteria);
    console.log('Filters applied:', filterCriteria);

    // Filter products based on filterCriteria
    const filteredProducts = allProducts.filter((product) => {

      return product.category === filterCriteria.category;
    });
    setProducts(filteredProducts);
  };


  return (
    <div className="container">
      <Filter onFilter={handleFilter} />
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>

    </div>
  );
};

export default ProductsList;

