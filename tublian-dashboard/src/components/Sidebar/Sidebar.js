// Sidebar.js

import React from 'react';
import SidebarViewModel from './SidebarViewModel';

const Sidebar = () => {
  const { menuItems } = SidebarViewModel();

  return (
<div className="flex flex-col h-screen">
      <div className="w-64 bg-white shadow-lg flex flex-col flex-grow">
        <div className="py-4 px-4 border-gray-200">
          <div className="logo flex items-center mb-3 h-9 w-full ml-12 ">
            <img src="images/logo.png" alt="Company Logo" className="h-8 mr-2 ml-6 " />
          </div>
          <nav className="space-y-4 text-gray-custom">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`flex py-2 px-4 rounded hover:bg-green-300 items-center ${
                  item.label === 'Dashboard' ? 'bg-green-500 text-white' : ''
                }`}
              >
                <img src={item.icon} alt={item.label} className="w-6 h-6 mr-2" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="py-2 px-8  border-t border-gray-200 bg-white mt-auto ">
        <a href="#" className="block py-2 px-4 rounded hover:bg-green-300 text-green-500 text-lg">
          Log-out
        </a>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
