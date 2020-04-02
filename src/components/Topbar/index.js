import React, { useState } from 'react';

import Notifications from '../Notifications';
import Options from '../Options';

import { Wrap } from './styles';

import { toggleFullscreen } from '../../utils/ui';

import {
  FiMenu,
  FiBell,
  FiMaximize,
  FiMinimize
} from 'react-icons/fi';

import Default from '../../assets/default.png';

export default function Topbar({ nome, img, showMenu, setShowMenu, showSubMenu, setShowSubMenu, isDropdown }) {

  const [showNotificacoes, setShowNotificacoes] = useState(false);
  const [showOpcoes, setShowOpcoes] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [menuControl, setMenuControl] = useState(false);

  const toggleMenus = () => {
    if (isDropdown) {
      if (showMenu && showSubMenu) {
        setShowSubMenu(false);
        setMenuControl(false);
      } else if (showMenu && !showSubMenu) {
        if (menuControl) {
          setShowSubMenu(true);
        } else {
          setShowMenu(false);
        }
      } else {
        setShowMenu(true);
        setMenuControl(true);
      }
    } else {
      setShowMenu(!showMenu);
    }
  };

  return (
    <>
      {(showNotificacoes) && <Notifications setShowNotificacoes={setShowNotificacoes} />}
      {(showOpcoes) && <Options setShowOpcoes={setShowOpcoes} />}

      <Wrap>
        <div className='left'>
          <button onClick={() => toggleMenus()} className='btnmenu'>
            <FiMenu />
          </button>
        </div>
        <div className='middle'>
          <div className='logo'>
            <h1>
              <span>React</span>Admin
          </h1>
          </div>
        </div>
        <div className='right'>
          <button onClick={() => toggleFullscreen(fullscreen, setFullscreen)} className='btntopbar'>
            {(fullscreen) ? <FiMinimize /> : <FiMaximize />}
          </button>
          <button onClick={() => setShowNotificacoes(true)} className='btntopbar'>
            <FiBell />
          </button>
          <button onClick={() => setShowOpcoes(true)} className='btnuser'>
            <span>Ryan Drumond</span>
            <img src={Default} />
          </button>
        </div>
      </Wrap>
    </>
  );
}
