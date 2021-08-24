import React, { useState } from 'react';

const brandStyle = {
  backgroundColor: 'steelblue',
  width: '40px',
  height: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '50%',
};
const brandIconStyle = {
  color: 'white',
  fontSize: '30px',
};

const Navbar = props => {
  const [search, setSearch] = useState('');
  return (
    <div className='navbar'>
      <>
        <ul className='left'>
          <li style={brandStyle}>
            <div>{'  '}</div>
            <i
              className='fa fa-facebook brand'
              data-testid='brand'
              style={brandIconStyle}
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
              <img src='' alt='pic' className='profile-btn-img' />
              Name
            </button>
          </li>
          <li>
            <button data-testid='menu-btn' className='menu-btn btn'>
              <i className='fas fa-ellipsis-v'></i>
            </button>
          </li>
          <li>
            <button data-testid='messenger-btn' className='messenger-btn btn'>
              <i className='fab fa-facebook-messenger'></i>
            </button>
          </li>
          <li>
            <button
              data-testid='notification-btn'
              className='notification-btn btn'
            >
              <i className='fas fa-bell' />
            </button>
          </li>
          <li>
            <button data-testid='dropdown-btn' className='dropdown-btn btn'>
              <i className='fas fa-caret-down'></i>
            </button>
          </li>
        </ul>
      </>
    </div>
  );
};

export default Navbar;
