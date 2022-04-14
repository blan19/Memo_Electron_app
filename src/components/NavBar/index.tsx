import React, { useMemo } from "react";
import styled from "styled-components";
import { VscCalendar } from "react-icons/vsc";
import { BsListCheck, BsYoutube } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";
import { flexCenter, flexColStart } from "@/lib/styles/common";
import { NavLink, useLocation } from "react-router-dom";

interface OptionsType {
  path: string;
  icon: JSX.Element;
}

const options = [
  {
    path: "/",
    icon: <VscCalendar />,
  },
  {
    path: "/todos",
    icon: <BsListCheck />,
  },
  {
    path: "/clips",
    icon: <GiPaperClip />,
  },
  {
    path: "/videos",
    icon: <BsYoutube />,
  },
];

const NavBarLink = (options: OptionsType[]) => {
  return options.map((option) => (
    <li key={option.path}>
      <NavLink to={option.path}>{option.icon}</NavLink>
    </li>
  ));
};

const NavBar = () => {
  const link = useMemo(() => NavBarLink(options), [options]);
  const { pathname } = useLocation();

  if (pathname.includes("/login")) {
    return null;
  }

  return (
    <NavBarContainer>
      <ul>{link}</ul>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.nav`
  width: 50px;
  height: 100vh;
  background-color: #e9ecef;
  ul {
    ${flexColStart}
    width: 100%;
    height: 100%;
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
          background-color: #495057;
          svg {
            color: #fff;
          }
        }
      }
      a.active {
        background-color: #495057;
        svg {
          color: #fff;
        }
      }
    }
  }
`;
