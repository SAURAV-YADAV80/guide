import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define types for the NavItem props
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;  // Proper type for onClick
}

interface SidebarProps {
  setSidebarOpen: (isOpen: boolean) => void;  // Proper type for setSidebarOpen
}

const Sidebar = ({ setSidebarOpen }: SidebarProps) => {
  // Type the state to restrict keys to 'todo' and 'diary'
  const [expandedItems, setExpandedItems] = useState<{
    todo: boolean;
    diary: boolean;
  }>({
    todo: false,
    diary: false
  });

  // Update toggleItem function to use the keys of expandedItems
  const toggleItem = (item: keyof typeof expandedItems) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const NavItem = ({ href, children, className = "", onClick }: NavItemProps) => (
    <Link
      to={href}
      className={`flex items-center px-4 py-2.5 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-150 ${className}`}
      onClick={() => {
        onClick?.(); // Call the onClick function if provided
        setSidebarOpen(false); // Close the sidebar after a link is clicked
      }}
    >
      {children}
    </Link>
  );

  return (
    <div className="h-full bg-white shadow-lg border-r border-gray-100">
      <aside className="h-full flex flex-col py-4 overflow-y-auto">
        {/* Brand/Logo area */}
        <div className="px-6 mb-6">
          <NavItem
            href="/"
            className="text-xl font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Dashboard
          </NavItem>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-1 px-3">
          <NavItem href="/academics">Academics</NavItem>
          <NavItem href="/resume">Resume</NavItem>
          <NavItem href="/storage">Storage</NavItem>

          {/* Todo Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleItem('todo')}
              className="w-full flex items-center justify-between px-4 py-2.5 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-150"
            >
              <span>Todo</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedItems.todo ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                expandedItems.todo ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'
              }`}
            >
              <NavItem href="/todo/daily" className="pl-8">Daily</NavItem>
              <NavItem href="/todo/longterm" className="pl-8">Long Term</NavItem>
            </div>
          </div>

          <NavItem href="/events">Events</NavItem>

          {/* Diary Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleItem('diary')}
              className="w-full flex items-center justify-between px-4 py-2.5 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-150"
            >
              <span>Diary</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedItems.diary ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                expandedItems.diary ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'
              }`}
            >
              <NavItem href="/diary/academic" className="pl-8">Academic</NavItem>
              <NavItem href="/diary/personal" className="pl-8">Personal</NavItem>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;