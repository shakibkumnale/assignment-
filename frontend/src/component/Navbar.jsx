import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className=" items-center gap-3 flex">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Shakib Kumnale</h1>
          </div>
          <div className="flex gap-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg ${location.pathname === '/' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Home
            </Link>
            <Link
              to="/form"
              className={`px-4 py-2 rounded-lg ${location.pathname === '/form' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Add User
            </Link>
            <Link
              to="/display"
              className={`px-4 py-2 rounded-lg ${location.pathname === '/display' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              View Users
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg ${location.pathname === '/about' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;