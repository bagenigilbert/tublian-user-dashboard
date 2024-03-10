import { useState } from 'react';   
const SidebarViewModel = () => {
    const [menuItems]=useState([
      { label: 'Dashboard', link: '#', icon: 'images/dashboard-icon.png' },
      { label: 'Analytics', link: '#', icon: 'images/analytics-icon.png' },
      { label: 'Communities', link: '#', icon: 'images/communities-icon.png' },
      { label: 'Notifications', link: '#', icon: 'images/notifications-icon.png' },
      { label: 'Media', link: '#', icon: 'images/media-icon.png' },
      { label: 'Settings', link: '#', icon: 'images/settings-icon.png' },
  ]);
  return (
    {menuItems}
  );
}
export default SidebarViewModel;
