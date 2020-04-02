import React from 'react';

import { Backdrop } from '../../styles/components';
import { Wrap, Button } from './styles';

export default function Options({ setShowOpcoes }) {
  return (
    <>
      <Backdrop onClick={() => setShowOpcoes(false)} />
      <Wrap>
        <ul className='customscroll'>
          <li>
            <Button>Meu perfil</Button>
          </li>
          <li>
            <Button>Configurações</Button>
          </li>
          <li>
            <Button>Sair</Button>
          </li>
        </ul>
      </Wrap>
    </>
  );
}
