import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Left = props => {
  const { search, set } = props;
  return (
    <ul className='left'>
      <li className='brand_style' data-testid='brand-icon'>
        <Link to='/'>
          <div>{'  '}</div>
          <i className='fa fa-facebook brand_icon_style' />
        </Link>
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
        <Link to='/'>
          <i className='fa fa-home' data-testid='home-icon' />
        </Link>
      </li>
      <li className='friends-inmenu'>
        <Link to='/friends'>
          <i className='fas fa-user-friends' data-testid='friends-icon' />
        </Link>
      </li>
      <li className='watch-inmenu'>
        <Link to='/watch'>
          <i className='fas fa-video' data-testid='watch-icon' />
        </Link>
      </li>
      <li className='market-inmenu'>
        <Link to='/market-place'>
          <i className='fas fa-store' data-testid='market-icon' />
        </Link>
      </li>
      <li className='gaming-inmenu'>
        <Link to='/gaming'>
          <i className='fas fa-dice-four' data-testid='gaming-icon'></i>
        </Link>
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
        <Link to='profile'>
          <button data-testid='profile-btn' className='profile-btn btn'>
            <img src='' alt='pic' className='profile-btn-img' />
            <span className='profile-name'>Name</span>
          </button>
        </Link>
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
