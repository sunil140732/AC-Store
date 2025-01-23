import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Handle filter submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters); // Pass filters to the parent component
  };

  return (
    <div className="p-3 mb-4">
      <h5>Filter Products</h5>
      <form onSubmit={handleSubmit}>
        {/* Category Filter */}
        <div >
          <label className="form-label">Category</label>
          <select
            id="category"
            name="category"
            className="form-select"
            value={filters.category}
            onChange={handleChange}
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-3">
          <label className="form-label">Price Range</label>
          <div className="d-flex">
            <input
              type="number"
              name="minPrice"
              className="form-control me-2"
              placeholder="Min"
              value={filters.minPrice}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxPrice"
              className="form-control"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Apply Filters</button>
      </form>
    </div>
  );
};

export default Filter;

