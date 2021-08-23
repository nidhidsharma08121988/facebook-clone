import React, { useState } from 'react';

const Navbar = props => {
  const [search, setSearch] = useState('');
  return (
    <div className='navbar'>
      <div className='left'>
        <ul>
          <li>
            <i className='fa fa-facebook' data-testid='brand' />
          </li>
          <li>
            <input
              onChange={e => setSearch(e.target.value)}
              type='text'
              value={search}
              placeholder='Search facebook'
              data-testid='search'
            />
          </li>
        </ul>
      </div>
      <div className='center'>
        <ul>
          <li>
            <i className='fa fa-home' data-testid='home-icon' />
          </li>
          <li>
            <i className='fas fa-user-friends' data-testid='friends-icon' />
          </li>
          <li>
            <i className='fas fa-video' data-testid='watch-icon' />
          </li>
          <li>
            <i className='fas fa-store' data-testid='market-icon' />
          </li>
          <li>
            <i className='fas fa-dice-four' data-testid='gaming-icon'></i>
          </li>
        </ul>
      </div>
      <div className='right'>
        <ul>
          <li>
            <button data-testid='profile-btn'>
              <img src='' alt='profile' className='profile-btn' />
            </button>
          </li>
          <li>
            <button data-testid='menu-btn'>
              <i className='fas fa-bars' />
            </button>
          </li>
          <li>
            <button data-testid='messenger-btn'>
              <i className='fab fa-facebook-messenger'></i>
            </button>
          </li>
          <li>
            <button data-testid='notification-btn'>
              <i className='fas fa-bell' />
            </button>
          </li>
          <li>
            <button data-testid='dropdown-btn'>
              <i className='fas fa-caret-down'></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
