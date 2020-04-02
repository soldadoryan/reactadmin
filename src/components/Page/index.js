import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { Wrap, Content } from './styles';

export default function Page({ content }) {
  const [showMenu, setShowMenu] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const [contentStyle, setContentStyle] = useState('menu');

  useEffect(() => {
    if (showSubMenu) {
      setContentStyle('submenu');
    } else if (showMenu && !showSubMenu) {
      setContentStyle('menu');
    } else {
      setContentStyle('none');
    }
  }, [showMenu, showSubMenu, isDropdown]);

  return (
    <Wrap>
      <Header
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        showSubMenu={showSubMenu}
        setShowSubMenu={setShowSubMenu}
        isDropdown={isDropdown}
        setIsDropdown={setIsDropdown}
      />
      <Content className={`customscroll ${contentStyle}`}>
        {content}
      </Content>
    </Wrap>
  );
}
