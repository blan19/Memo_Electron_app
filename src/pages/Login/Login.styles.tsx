import styled from "styled-components";
import {
  Button,
  flexCenter,
  flexColCenter,
  flexStart,
  Input,
  reveal,
  rotationHand,
  showup,
} from "@/lib/styles/common";

const LoginContainer = styled.main`
  width: 100vw;
  height: 100vh;
  ${flexCenter}
  background-color: var(--color-subBgColor);
`;

const LoginForm = styled.form`
  width: 50rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-bgColor);

  /* Form Title */
  .login-title {
    overflow: hidden;
    text-align: center;
    backface-visibility: hidden;
    perspective: 1000;
    & > div {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
    }
    .showup {
      animation: ${showup} 7s infinite;
    }
    .reveal {
      h1 {
        transform: translateX(100%);
        animation: ${reveal} 7s infinite ease;
      }
      span {
        font-size: 3.5rem;
        display: inline-block;
        animation: ${rotationHand} 2.5s infinite;
      }
    }
    h1 {
      font-size: var(--font-title-2);
      font-weight: 300;
    }
  }

  /* Form Contents */
  .login-contents {
    margin-top: 3rem;
    margin-left: 5rem;
    margin-right: 5rem;
    .login-contents-wrapper {
      position: relative;
      margin-top: 1rem;
      ${flexColCenter}
      svg {
        left: 0.5rem;
        top: 0.875rem;
        position: absolute;
        font-size: 2rem;
        color: var(--color-subText);
      }
      input {
        ${Input}
        width: 100%;
        padding: 1rem 3rem;
        border: 1px solid var(--color-subBgColor);
        font-size: var(--font-sub-2);
        &:focus {
          border: 1px solid var(--color-subText);
        }
        &::placeholder {
          color: var(--color-subText);
        }
      }
    }
  }

  /* Form Button */
  .login-button {
    margin: 2rem 5rem;
    button {
      width: 100%;
      ${Button}
      background: var(--color-mainColor);
      font-size: var(--font-main-1);
      color: var(--color-bgColor);
      &:hover {
        opacity: 0.85;
      }
    }
  }
`;

const LoginError = styled.div`
  width: 100%;
  margin-top: 1rem;
  ${flexStart}
  p {
    color: red;
    font-weight: 300;
    font-size: var(--font-sub-2);
  }
`;

export { LoginContainer, LoginForm, LoginError };
