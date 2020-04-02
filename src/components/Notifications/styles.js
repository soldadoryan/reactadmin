import styled from 'styled-components';

import colors from '../../presets/colors';
import effects from '../../presets/effects';

export const Wrap = styled.div`
  width: 250px;
  height: 300px;
  position: fixed;
  z-index: 1081;
  border: 1px solid ${colors.border};
  top: 110px;
  right: 50px;
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

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .description {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        
        span { color: ${colors.texton}; font-size: 13px; }
        small { color: ${colors.textoff}; margin-top: 5px; font-size: 11px; }
      }
    }
  }
`;