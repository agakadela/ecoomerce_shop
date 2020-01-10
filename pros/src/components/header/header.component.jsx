import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/PROS_LOGO.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            WYLOGUJ
          </div>
        ) : (
          <Link className='option' to='/logowanie'>
            ZALOGUJ
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
