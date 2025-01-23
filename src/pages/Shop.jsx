import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/Product";
import Filter from "../components/Filter";

const Shop = ({ searchQuery }) => {
  // State for products and filters
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []); // Fetch data only on initial load

  // Handle filter change from the Filter component
  const handleFilter = (filterCriteria) => {
    setFilters(filterCriteria); // Update the filters state
  };

  // Filter products based on search query and selected filters
  const filteredProducts = products
    .filter((product) => {
      // Filter by search query
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .filter((product) => {
      // Filter by category
      return filters.category ? product.category.toLowerCase() === filters.category.toLowerCase() : true;
    })
    .filter((product) => {
      // Filter by min price
      const minPrice = filters.minPrice ? parseFloat(filters.minPrice) : 0;
      return product.price >= minPrice;
    })
    .filter((product) => {
      // Filter by max price (ensure it's a number and is valid)
      const maxPrice = filters.maxPrice ? parseFloat(filters.maxPrice) : Infinity;
      return product.price <= maxPrice;
    });

  if (products.length === 0) return <h1>Loading...</h1>;

  return (
    <>
    <div>
        {/* Filter Section */}
        <div className="flex">
          <Filter onFilter={handleFilter} />
        </div>
    </div>
    <div className="container">

        {/* Product List */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <h2>No products found.</h2>
            )}
          </div>
    </div>
    </>
  );
};

export default Shop;
