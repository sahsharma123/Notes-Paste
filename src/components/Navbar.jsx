import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b-2 border-blue-500">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <div className="mb-2 sm:mb-0">
            <h1 className="text-2xl font-bold text-blue-600">
              📋 NotesPaste
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-2">
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
