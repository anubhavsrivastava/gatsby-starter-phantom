import React from 'react';

export default function TopNav({ onMenuClick = () => {} }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuClick();
            }}
          >
            Menu
          </a>
        </li>
      </ul>
    </nav>
  );
}
