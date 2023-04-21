import React from 'react';
import MenuItem from './MenuItem';

function Sidebar({ menuItems, activeMenu, onMenuItemClick }) {
    return (
        <aside className="sidebar">

            <ul className="menu">

                {menuItems.map((menuItem, index) => (

                    <MenuItem
                        key={index}
                        name={menuItem.name}
                        link={menuItem.link}
                        active={activeMenu === index}
                        onClick={() => onMenuItemClick(index)}
                    />

                ))}

            </ul>
        </aside>
    );
}

export default Sidebar;
