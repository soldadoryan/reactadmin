import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Poppins', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-weight: normal;
  }

  .customscroll {
    overflow-x: hidden;
    overflow-y: auto;

    /* width */
    &::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f8f8f8; 
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c1c1c1; 
      border-radius: 5px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }
`;