import React from 'react';

const Home = () => {
  const dummyData = [
    {
      title: 'Product 1',
      description: 'This is a description for Product 1.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdaPFOHgYAIzHZyQv2_IfWOMWP0ygkjkphQ&s',
    },
    {
      title: 'Product 2',
      description: 'This is a description for Product 2.',
      image: 'https://images.bewakoof.com/uploads/grid/app/casual-outfits-for-men-bewakoof-blog-9-1615892381.jpg',
    },
    {
      title: 'Product 3',
      description: 'This is a description for Product 3.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmzjxUVjb74eN7ESrH-87rIWsWDhi9UwyAA&s',
    },
    {
      title: 'Product 4',
      description: 'This is a description for Product 4.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-UDcIBXBSSja3sKqFYyj42GIUR2GBoV0Yw&s',
    },
    {
      title: 'Product 5',
      description: 'This is a description for Product 5.',
      image: 'https://i.pinimg.com/236x/c8/8d/95/c88d9538219e1dba9af46f4f339711e5.jpg',
    },
    {
      title: 'Product 6',
      description: 'This is a description for Product 6.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2wIwXkfnH9uvyuhYqF76XYYEM5HTrhOG4w&s',
    },
    {
      title: 'Product 7',
      description: 'This is a description for Product 7.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YwP3VjBcWS_PoZC_c9Wla0Nnq-aqn16YXw&s',
    },
    {
      title: 'Product 8',
      description: 'This is a description for Product 8.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSiTVZOO0wHZnAOdn5-A4r-s9x87uUq15Vg&s',
    },
  ];

  return (
    <div className="container mt-4">
      {/* Main Heading */}
      <header className="text-center mb-5">
        <h1>Welcome to AC Store</h1>
        <p className="lead">Your one-stop shop for premium fashion and lifestyle products.</p>
      </header>
      {/* Products Section */}
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row">
        {dummyData.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card p-2 h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: '250px'}}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-success">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer Section */}
      <footer className="mt-5 text-center">
        <h3>Why Choose AC Store?</h3>
        <p>High-quality products | Affordable prices | Fast shipping | Exceptional customer service</p>
      </footer>
    </div>
  );
};

export default Home;
