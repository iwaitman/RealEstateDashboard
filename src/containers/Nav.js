import React from 'react';

function Nav() {
  return (
    <nav className='navbar navbar-expand navbar-light bg-white'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <a className='nav-link' href='/'>
            DASHBOARD <span className='sr-only'>(current)</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/properties'>
            PROPERTIES
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/accounting'>
            ACCOUNTING
          </a>
        </li>
      </ul>
      <a className='form-inline my-2 my-lg-0' href='/profile'>
        <p className='my-2 my-sm-0 lead'>Isaac Waitman</p>
      </a>
    </nav>
  );
}

export default Nav;
