import React, { useState } from 'react';

const Navbar = props => {
  const [search, setSearch] = useState('');
  return (
    <div className='navbar'>
      <>
        <ul className='left'>
          <li
            className='brand-container-inmenu'
            style={{
              backgroundColor: 'steelblue',
              width: '35px',
              height: '35px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <div>{'  '}</div>
            <i
              className='fa fa-facebook brand'
              data-testid='brand'
              style={{
                color: 'white',
                fontSize: '30px',
              }}
            />
          </li>
          <li className='search-container-inmenu'>
            <i className='fa fa-search search-icon' style={{ zIndex: 1 }} />
            <input
              onChange={e => setSearch(e.target.value)}
              type='text'
              value={search}
              placeholder='Search Facebook'
              data-testid='search'
              className='search'
            />
          </li>
        </ul>
      </>
      <>
        <ul className='center'>
          <li className='home-inmenu'>
            <i className='fa fa-home' data-testid='home-icon' />
          </li>
          <li className='friends-inmenu'>
            <i className='fas fa-user-friends' data-testid='friends-icon' />
          </li>
          <li className='watch-inmenu'>
            <i className='fas fa-video' data-testid='watch-icon' />
          </li>
          <li className='market-inmenu'>
            <i className='fas fa-store' data-testid='market-icon' />
          </li>
          <li className='gaming-inmenu'>
            <i className='fas fa-dice-four' data-testid='gaming-icon'></i>
          </li>
        </ul>
      </>
      <>
        <ul className='right'>
          <li>
            <button data-testid='profile-btn' className='profile-btn btn'>
              <img src='' alt='profile' className='profile-btn-img' />
              Name
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
      </>
    </div>
  );
};

export default Navbar;
