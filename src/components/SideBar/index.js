import React from 'react';
import './style.css';
import 'boxicons';

export default function SideBar() {
  return (
    <div id='sidebar'>
      <ul>
        <li>
          <box-icon type='logo' name='github' size='md'></box-icon>
        </li>
        <li>
          <box-icon name='linkedin-square' type='logo' size='md'></box-icon>
        </li>
        <li>
          <box-icon name='stack-overflow' type='logo' size='md'></box-icon>
        </li>
      </ul>
    </div>
  );
}
