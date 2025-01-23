import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    message: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server)
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <div className="container mt-5">
      <div>
        <div className="card-header">
          <h2>Contact Us</h2>
        </div>
        <div className="card-body">
          <h3>We'd Love to Hear From You!</h3>
          <p>If you have any questions or need assistance, feel free to reach out using the form below:</p>
          
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div >
                  <label  className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            {/* Google Map - This part is in the other column */}
            <div className="col-md-6">
              <h4>Our Location</h4>
              {/* <p>Find us at the location below:</p> */}
              <div className="map-container" >
                <iframe class="gmap_iframe" style={{width:'100%',height:'200px'}}  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Pakala(V),Singrayakonda(M),Prakasam(D)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
