import styled from 'styled-components';

import colors from '../../presets/colors';

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.bgsecondary};
  transition: width .5s;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  position: fixed;
  z-index: 1040;
  top: 100px;
  right: 0;
  padding: 40px 50px 0;

  &.none {
    width: 100%;
  }

  &.menu {
    width: calc(100% - 125px);
  }

  &.submenu {
    width: calc(100% - (230px + 125px));
  }

  &.none, &.menu, &.submenu {
    @media(max-width: 768px) {
      width: 100%;
      padding: 40px 10px;
    }
  }
`;