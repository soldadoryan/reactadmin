import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../presets/colors';

export const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 20px;
  margin-bottom: 25px;

  h1{
    font-weight: normal;
    color: ${colors.texton};

    small {
      font-size: 14px;
      margin-left: 20px;
      color: ${colors.textoff};

      span { margin: 0 5px;}

      @media(max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: ${colors.textoff};
`;