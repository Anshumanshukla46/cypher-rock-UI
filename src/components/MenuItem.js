import React from 'react';

function MenuItem({ name, link, active, onClick }) {
    return (

        <li className={`menu-item ${active ? 'active' : ''}`}>

            <a
                href={link}
                onClick={onClick}>
                {name}
            </a>

        </li>
    );
}

export default MenuItem;
