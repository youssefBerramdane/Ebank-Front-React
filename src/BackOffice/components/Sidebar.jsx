import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsGraphUp, BsSearch, BsShieldLockFill, BsCreditCard, BsGear } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
           Back Office
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
        <NavLink to="/backoffice" exact activeStyle={{ backgroundColor: 'rgba(0, 0, 255, 0.4)' }}>
            <BsGraphUp className='icon' /> Tableau de Bord
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/transfers" activeClassName="active">
            <BsSearch className='icon' /> Consultation des Transferts
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/block" activeClassName="active">
            <BsShieldLockFill className='icon' /> Blocage des Transferts
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/unblock" activeClassName="active">
            <BsShieldLockFill className='icon' /> Déblocage des Transferts
          </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/limit-settings" activeClassName="active">
            <BsCreditCard className='icon' /> Paramètres de Plafond
          </NavLink>
        </li>
        
      </ul>
    </aside>
  );
}

export default Sidebar;
