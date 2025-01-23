import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div >
        <div >
          <h2>About Us</h2>
        </div>
        <div >
          <h3 >Welcome to ACStore</h3>
          <p>
            We are a premier online fashion retailer committed to providing the best selection of clothing, accessories, and footwear. Our mission is to offer a unique shopping experience that combines quality, affordability, and style.
          </p>
          <h4>Our Story</h4>
          <p>
            Since our founding, we have strived to deliver fashion-forward products that our customers love. With a strong focus on customer satisfaction, we continue to grow and expand our offerings, ensuring that we meet the ever-changing needs of the fashion industry.
          </p>
          <h4>Our Values</h4>
          <ul>
            <li>Quality: We are committed to offering only the highest quality products.</li>
            <li>Customer-Centric: Your satisfaction is our top priority.</li>
            <li>Innovation: We constantly explore new trends and technologies to enhance your shopping experience.</li>
          </ul>
          <h4>Contact Us</h4>
          <p>If you have any questions, feel free to reach out to our support team via the <a href="/contact">Contact Page</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
