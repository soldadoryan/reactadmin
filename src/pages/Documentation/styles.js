import styled from 'styled-components';

import colors from '../../presets/colors';
import effects from '../../presets/effects';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .wrapdoc { 
    width: 100%;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }

    .paneldoc {
      width: calc(70% - 10px);
      margin-right: 20px;
      margin-bottom: 40px;

      @media (max-width: 1024px) {
        width: 100%;
      }

      h2 {
        font-weight: bold;
        color: ${colors.texton}
      }

      h3 {
        font-weight: bold;
        color: ${colors.texton};
      }

      p {
        margin-top: 10px;
        color: ${colors.texton};
        margin-bottom: 20px;

      }

      .code {
        code {
          padding: 15px;
          width: 100%;
          border-radius: 10px;
        }
      }

      .space {
        width: 100%;
        height: 1px;
        margin: 10px 0;
      }

      .separator {
        width: 100%;
        height: 1px;
        margin: 40px 0;
        border-top: 1px solid ${colors.border};
      }

      h4 {
        color: ${colors.texton};
        margin-bottom: 5px;
        font-weight: 600;

        small { color: ${colors.primary} }
      }

    }

    .paneldep {
      width: calc(30% - 10px);
      height: -webkit-fill-available;

      @media (max-width: 1024px) {
        width: 100%;
        margin-bottom: 25px;
      }


      h4 { font-weight: 600; color: ${colors.texton} }

      a {
        width: 100%;
        display: block;
        border-bottom: 1px solid ${colors.border};
        margin-bottom: 20px;
        line-height: 40px;
        padding-bottom: 10px;
        text-decoration: none;
        color: ${colors.textoff};

        &:last-child {
          border-bottom: 0;
          margin-bottom: 0;
        }
      }
    }
  }
`;
