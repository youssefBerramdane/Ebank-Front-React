import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Assurez-vous d'avoir installé et configuré React Router

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <Link className="icon-link">
          <BsSearch className='icon' />
        </Link>
      </div>
      <div className='header-right'>
        <Link to="/notifications" className="icon-link">
          <BsFillBellFill className='icon' />
        </Link>
        {/* <Link to="/messages" className="icon-link">
          <BsFillEnvelopeFill className='icon' />
        </Link>
        <Link to="/profile" className="icon-link">
          <BsPersonCircle className='icon' />
        </Link> */}
      </div>
    </header>
  );
}

export default Header;
