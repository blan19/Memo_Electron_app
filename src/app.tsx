import React, { lazy, Suspense } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import GlobalStyles from "./lib/styles/GlobalStyles";
import "./fonts/font.css";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";

const Login = lazy(() => import("./pages/Login"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Clips = lazy(() => import("./pages/Clips"));
const Videos = lazy(() => import("./pages/Videos"));

const App = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <HashRouter>
      <GlobalStyles />
      <AppContainer>
        <NavBar />
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route
              index
              element={<Navigate replace to={`/calendar/${user.user.id}`} />}
            />
            <Route
              path="/calendar/*"
              element={
                <PrivateRoute>
                  <Calendar user={user} />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/todos" element={<div></div>} />
            <Route path="/clips" element={<Clips />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </Suspense>
      </AppContainer>
    </HashRouter>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
`;
