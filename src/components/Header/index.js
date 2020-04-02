import React, { useState } from 'react';

import Topbar from '../Topbar';
import Menu from '../Menu';

export default function Header({ showMenu, setShowMenu, showSubMenu, setShowSubMenu, isDropdown, setIsDropdown }) {
  return (
    <>
      <Topbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showSubMenu={showSubMenu}
        setShowSubMenu={setShowSubMenu}
        isDropdown={isDropdown}
        setIsDropdown={setIsDropdown}
      />
      <Menu
        showMenu={showMenu}
        showSubMenu={showSubMenu}
        setShowSubMenu={setShowSubMenu}
        isDropdown={isDropdown}
        setIsDropdown={setIsDropdown}
      />
    </>
  );
}
