import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}
  :root {
    /* Color */
    --color-bgColor: #FFFFFF;
    --color-subBgColor: #edf2ff;
    --color-borderColor: #bac8ff;
    --color-primaryText: #000;
    --color-rPrimaryText: #fff;
    --color-subText: #adb5bd;
    --color-mainColor: #5c7cfa;
    /* Font */
    --font-title-1: 3rem;
    --font-title-2: 2.5rem;
    --font-sub-1: 1.5rem;
    --font-sub-2: 1.25rem;
    --font-main-1: 2rem;
    --font-main-2: 1.75rem;
    --font-icon-1: ;
    --font-icon-2: ;
  }

  html,
  body {
    font-family: 'Nanum Coding', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    font-size: 62.5%;
    @media screen and (max-width: 1280px) {
      font-size: 56.3%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 50%;
    }
    @media screen and (max-width: 768px) {
      font-size: 43.8%;
    }
    @media screen and (max-width: 480px) {
      font-size: 37.5%;
    }
    @media screen and (max-width: 400px) {
      font-size: 31.2%;
    }
    @media screen and (max-width: 300px) {
      font-size: 18.6%;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
  }
`;
