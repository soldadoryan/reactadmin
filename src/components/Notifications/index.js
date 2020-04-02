import React from 'react';

import Default from '../../assets/default.png';
import { Backdrop } from '../../styles/components';
import { Wrap } from './styles';

export default function Notifications({ setShowNotificacoes }) {
  return (
    <>
      <Backdrop onClick={() => setShowNotificacoes(false)} />
      <Wrap>
        <ul className='customscroll'>
          <li>
            <img src={Default} />
            <div className='description'>
              <span>
                Ryan cadastrou novo usuários.
              </span>
              <small>30/12/1997 14h00</small>
            </div>
          </li>
          <li>
            <img src={Default} />
            <div className='description'>
              <span>
                Ryan cadastrou novo usuários.
              </span>
              <small>30/12/1997 14h00</small>
            </div>
          </li>
        </ul>
      </Wrap>
    </>
  );
}
