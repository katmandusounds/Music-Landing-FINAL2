import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === 'wadiz' && password === 'this') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-black py-6 flex flex-col sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <button
            onClick={handleLogout}
            className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-1 px-2 rounded transition-colors duration-200"
          >
            Logout
          </button>
          <AdminDashboard />
          <div className="mt-8 text-center">
            <Link to="/" className="text-gray-400 hover:text-gray-300">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;