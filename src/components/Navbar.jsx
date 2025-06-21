import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b-2 border-blue-500">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              📋 NotesPaste
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-300 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`
              }
            >
              🏠 Home
            </NavLink>

            <NavLink
              to="/pastes"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-300 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`
              }
            >
              📄 My Pastes
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;