import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavItem: React.FC<NavItemProps> = ({ href, children, className = "" }) => (
    // For development preview:
    <Link
      to={href}
      className={`px-4 py-2 rounded-lg transition-all duration-150 ${className}`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto pl-16 md:pl-4 pr-4 h-16 flex items-center justify-between">
        {/* Logo and User Greeting */}
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-gray-700">Welcome, User</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavItem 
            href="/profile" 
            className="text-gray-600 hover:bg-gray-50"
          >
            Profile
          </NavItem>
          <NavItem 
            href="/login" 
            className="text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Login
          </NavItem>
          <NavItem 
            href="/signup" 
            className="text-indigo-600 hover:bg-indigo-50"
          >
            Sign Up
          </NavItem>
        </div>

        {/* Mobile Menu Button (right side) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-200 transition-all duration-200 ease-in-out ${
          menuOpen ? 'max-h-48 opacity-100 shadow-lg' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-2 space-y-1">
          <NavItem 
            href="/profile" 
            className="block w-full text-gray-600 hover:bg-gray-50"
          >
            Profile
          </NavItem>
          <NavItem 
            href="/login" 
            className="block w-full text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Login
          </NavItem>
          <NavItem 
            href="/signup" 
            className="block w-full text-indigo-600 hover:bg-indigo-50"
          >
            Sign Up
          </NavItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;