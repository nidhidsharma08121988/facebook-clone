import React, { useState } from 'react';

// const brandStyle = {
//   backgroundColor: 'steelblue',
//   minWidth: '40px',
//   minHeight: '40px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   borderRadius: '50%',
// };
// const brandIconStyle = {
//   color: 'white',
//   fontSize: '30px',
// };

const Left = props => {
  const { search, set } = props;
  return (
    <ul className='left'>
      <li className='brand_style'>
        <div>{'  '}</div>
        <i className='fa fa-facebook brand_icon_style' data-testid='brand' />
      </li>
      <li className='search-container-inmenu'>
        <i className='fa fa-search search-icon' style={{ zIndex: 1 }} />
        <input
          onChange={e => set(e.target.value)}
          type='text'
          value={search}
          placeholder='Search Facebook'
          data-testid='search'
          className='search'
        />
      </li>
    </ul>
  );
};

const Center = () => {
  return (
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
      <li className='rest-inmenu'>
        <i className='fas fa-bars' data-testid='rest-icon'></i>
      </li>
    </ul>
  );
};

const Right = () => {
  return (
    <ul className='right'>
      <li>
        <button data-testid='profile-btn' className='profile-btn btn'>
          <img src='' alt='pic' className='profile-btn-img' />
          <span className='profile-name'>Name</span>
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
        <button data-testid='notification-btn' className='notification-btn btn'>
          <i className='fas fa-bell' />
        </button>
      </li>
      <li>
        <button data-testid='dropdown-btn' className='dropdown-btn btn'>
          <i className='fas fa-caret-down'></i>
        </button>
      </li>
    </ul>
  );
};
const Navbar = props => {
  const [search, setSearch] = useState('');
  return (
    <div className='navbar'>
      <>
        <Left search={search} set={setSearch} />
      </>
      <>
        <Center />
      </>
      <>
        <Right />
      </>
    </div>
  );
};

export default Navbar;
