// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // Define a function to dynamically set Tailwind classes for active/non-active links
  const getNavLinkClass = (isActive) => {
    return isActive 
      ? "py-2 px-3 text-blue-700 border-b-2 border-blue-700 dark:text-blue-500 dark:border-blue-500" // Active link classes
      : "py-2 px-3 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"; // Non-active link classes
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Apricot</span>
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/privacy" 
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Privacy
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
