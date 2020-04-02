import styled from 'styled-components';

import colors from '../presets/colors';
import effects from '../presets/effects';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1080;
`;

export const Panel = styled.div`
  width: 100%;
  padding: 40px;
  background-color: ${colors.bgprimary};
  box-shadow: ${effects.boxshadow};
  border-radius: 10px;

  @media (max-width: 425px) {
    padding: 20px;
  }
`;