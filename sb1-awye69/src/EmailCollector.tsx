import React, { useState } from 'react';

const EmailCollector: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter a valid email');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/collect-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Error collecting email');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error collecting email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6">
      <h1 className="text-2xl font-bold">Subscribe for Updates</h1>
      <form onSubmit={handleEmailSubmit} className="mt-4">
        <input
          type="email"
          className="border p-2"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2" disabled={loading}>
          {loading ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default EmailCollector;
