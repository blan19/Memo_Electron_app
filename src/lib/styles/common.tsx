import { css, keyframes } from "styled-components";

// * Flex
const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexColCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const flexColStart = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const flexEvenly = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const flexStart = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// * Button
const Button = css`
  outline: none;
  border: none;
  background: none;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: var(--font-sub-2);
  border-radius: 0.5rem;
`;

// * Input
const Input = css`
  outline: none;
  border: none;
  background: none;
  border-radius: 0.5rem;
`;

// * Animation
const showup = keyframes`
  0% {opacity:0;}
  20% {opacity:1;}
  80% {opacity:1;}
  100% {opacity:0;}
`;

const reveal = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  20% {
    opacity: 0;
    transform: translateX(100%);
  }
  35% { 
    opacity: 1;
    transform: translateX(0%);
   }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(0%);
  }
`;

const rotationHand = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(16deg);
  }
  20% {
    transform: rotate(-6deg);
  }
  30% {
    transform: rotate(16deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(16deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// * Export
export {
  flexCenter,
  flexColCenter,
  flexColStart,
  flexEvenly,
  flexStart,
  Button,
  Input,
  showup,
  reveal,
  rotationHand,
};
