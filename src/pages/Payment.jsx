import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate payment processing (replace with actual payment logic)
    setSuccess('Payment successful!');
    setError('');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4" style={{ width: '400px' }}>
        <h3 className="mb-4 text-center">Payment</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Expiry Date</label>
            <input
              type="text"
              className="form-control"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">CVV</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Pay</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
