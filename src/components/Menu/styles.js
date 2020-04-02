import styled from 'styled-components';

import { Link } from 'react-router-dom';
import colors from '../../presets/colors';
import effects from '../../presets/effects';

export const Wrap = styled.nav`
  width: 125px;
  height: calc(100vh - 100px);
  position: absolute;
  left: 0;
  top: 100px;
  background-color: ${colors.bgprimary};
  box-shadow: ${effects.boxshadow};
  z-index: 1050;
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 115px;
  border-bottom: 1px solid #f0f0f0;
  text-decoration: none;
  color: ${colors.texton};
  font-size: 12px;
  position: relative;

  &.dropdown {
    flex-direction: row;
    justify-content: flex-start;
    font-size: 13px;
    height: 75px;

    svg { font-size: 20px; margin-right: 10px;}
  }

  &.active {
    color: ${colors.primary};

    &:before {
      content: '';
      width: 6px;
      height: 80%;
      border-radius: 10px;
      background-color: ${colors.primary};
      position: absolute;
      top: 10%; 
      left: 0; 
    }
  }

  svg {
    font-size: 30px;
    margin-bottom: 5px;
  }
`;

export const Dropdown = styled.div`
  width: 230px;
  height: calc(100vh - 100px);
  position: absolute;
  left: 125px;
  top: 100px;
  background-color: ${colors.bgprimary};
  z-index: 1049;
  box-shadow: ${effects.boxshadow};
  border-top-right-radius: 10px;
  padding: 20px;

  @media (max-width: 360px) {
    width: calc(100% - 125px);
  }
`;