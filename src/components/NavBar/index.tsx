import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import {
  flexColStart,
  VscCalendar,
  BsListCheck,
  BsYoutube,
  GiPaperClip,
  IoLogOutOutline,
  flexColEnd,
  flexColBetween,
  NavBarLi,
} from "@/lib/styles/common";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "@/lib/api/auth";
import { useDispatch } from "react-redux";
import { resetUser } from "@/reducers/userSlice";

interface OptionsType {
  path: string;
  icon: JSX.Element;
}

const options = [
  {
    path: "/calendar",
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onLogout = useCallback(() => {
    logout();
    dispatch(resetUser());
    navigate("/login");
  }, []);

  if (pathname.includes("/login")) {
    return null;
  }

  return (
    <NavBarContainer>
      <div>
        <ul>{link}</ul>
      </div>
      <div className="navbar-setting">
        <li>
          <a onClick={onLogout}>
            <IoLogOutOutline />
          </a>
        </li>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.nav`
  ${flexColBetween}
  width: 50px;
  height: 100vh;
  background-color: var(--color-subBgColor);
  div {
    width: 100%;
  }
  ul {
    ${flexColStart}
    ${NavBarLi}
  }
  .navbar-setting {
    margin-bottom: 5px;
    ${flexColEnd}
    ${NavBarLi}
  }
`;
