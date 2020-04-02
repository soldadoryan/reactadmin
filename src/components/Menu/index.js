import React, { useState } from 'react';

import ItensMenu from '../../contents/menu';

import { Wrap, Dropdown, Button } from './styles';

export default function Menu({ showMenu, setShowSubMenu, showSubMenu, isDropdown, setIsDropdown }) {
  const [active, setActive] = useState('Documentação');

  const [itensDropdown, setItensDropdown] = useState([]);

  const [itens] = useState(ItensMenu);

  return (
    <>
      {(showMenu) && (
        <>
          <Wrap>
            {itens.map(item => (
              (item.isDropdown) ? (
                <Button onClick={() => {
                  setIsDropdown(true);
                  setItensDropdown(item.itens);
                  setActive(item.title);
                  setShowSubMenu(true);
                }} className={(active == item.title) && 'active'}>
                  {item.icon}
                  <span>{item.title}</span>
                </Button>
              ) : (
                  <Button to={item.path} onClick={() => {
                    setIsDropdown(false);
                    setActive(item.title);
                    setShowSubMenu(false);
                  }} className={(active == item.title) && 'active'}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Button>
                )))}
          </Wrap>
          {(isDropdown && showSubMenu) &&
            <Dropdown>
              {itensDropdown.map(item => (
                <Button className='dropdown' to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Button>
              ))}
            </Dropdown>
          }
        </>
      )}
    </>
  );
}
