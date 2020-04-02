import styled from 'styled-components';

import colors from '../../presets/colors';
import effects from '../../presets/effects';

export const Wrap = styled.section`
  width: 100%;
  height: 100px;
  background-color: ${colors.bgprimary};
  box-shadow: ${effects.boxshadow};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1051;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btnmenu {
    width: 125px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background-color: transparent;
    border: 0;
    color: ${colors.textoff};
    cursor: pointer;

    @media (max-width: 320px) {
        width: 60px
    }
  }
  .left {
    width: 33%;
  }

  .middle {
    width: 33%;
    display: flex;
    justify-content: center;

    .logo {
      h1 {
        font-size: 30px;
        color: ${colors.texton};
        font-weight: bold;

        span { color: ${colors.primary} }

        @media (max-width: 375px) {
          font-size: 26px;
        }
      }
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
    width: 33%;

    .btntopbar {
      color: ${colors.textoff};
      background-color: transparent;
      border: 0;
      font-size: 20px;
      margin-right: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .btnuser {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: 0;
      font-size: 15px;
      color: ${colors.textoff};
      margin-right: 30px;
      cursor: pointer;  

      @media (max-width: 320px) {
        margin-right: 10px;
      }

      @media (max-width: 425px) {
        span {
          display: none;
        }
      }

      img { margin-left: 10px; width: 40px; height: 40px; }
    }
  }
`;
