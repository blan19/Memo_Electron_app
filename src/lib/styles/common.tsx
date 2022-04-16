import { css, keyframes } from "styled-components";
import { VscCalendar } from "react-icons/vsc";
import { BsListCheck, BsYoutube } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

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

const flexColEnd = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const flexColBetween = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

// * NavBar
const NavBarLi = css`
  li {
    width: 100%;
    margin-top: 5px;
    padding: 0 5px;
    a {
      width: 100%;
      ${flexCenter}
      padding: 3px 0;
      border-radius: 5px;
      cursor: pointer;
      background-color: #fff;
      svg {
        font-size: 17.5px;
        color: #000;
      }
      &:hover {
        background-color: var(--color-mainColor);
        svg {
          color: #fff;
        }
      }
    }
    a.active {
      background-color: var(--color-mainColor);
      svg {
        color: #fff;
      }
    }
  }
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
  flexBetween,
  flexStart,
  flexColEnd,
  flexColBetween,
  Button,
  Input,
  NavBarLi,
  showup,
  reveal,
  rotationHand,
  // icon
  VscCalendar,
  BsListCheck,
  BsYoutube,
  GiPaperClip,
  IoSettingsOutline,
  IoLogOutOutline,
  AiOutlineClockCircle,
};
