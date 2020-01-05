import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/PROS_LOGO.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/sklep'>
          SKLEP
        </Link>
        <Link className='option' to='/kontakt'>
          KONTAKT
        </Link>
      </div>
    </div>
  );
};

export default Header;
