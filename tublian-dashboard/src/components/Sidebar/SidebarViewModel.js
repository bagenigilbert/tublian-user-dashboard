import React from 'react';
import { useState } from 'react';   
const SidebarViewModel = () => {
    const [menuItems]=useState([
        { label: 'Dashboard', link: '#' },
        {label: 'Analytics', link: '#'},
        {label: 'Communities', link: '#'},
        {label: 'Notifications', link: '#'},
        {label: 'Media', link: '#'},
        {label: 'Settings', link: '#'},
    ])

  return (
    <div> 
      <ul>
        {menuItems.map((item) => (
          <li key={item.label}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default SidebarViewModel;
