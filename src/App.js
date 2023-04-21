import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


function App() {
  const [activeMenu, setActiveMenu] = useState(1);
  const menuItems = [
    { name: 'Portfolio', link: '#' },
    { name: 'Wallets', link: '#' },
    { name: 'Last Transaction', link: '#' },
    { name: 'Tutorials', link: '#' },
    { name: 'Setting', link: '#' },
    { name: 'Support', link: '#' },
  ];


  return (
    <div className="App">
      <Header />
      <Sidebar
        menuItems={menuItems}
        activeMenu={activeMenu}
        onMenuItemClick={(index) => setActiveMenu(index)}
      />

      <div className='content'>
        <Content />
      </div>

    </div>

  );
}

export default App;
