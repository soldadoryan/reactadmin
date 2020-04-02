import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../presets/colors';
import effects from '../../presets/effects';

export const Wrap = styled.div`
  width: 175px;
  position: fixed;
  z-index: 1081;
  border: 1px solid ${colors.border};
  top: 110px;
  right: 20px;
  background-color: ${colors.bgprimary};
  border-radius: 15px;
  box-shadow: ${effects.boxshadow};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  ul {
    padding: 0 10px;
    list-style: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    li {
      display: flex;
      border-bottom: 1px solid ${colors.border};
      padding: 10px 0;

      &:last-child {
        border-bottom: 0;
      }

    }
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: ${colors.textoff};
  font-size: 13px;
`;