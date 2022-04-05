import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import GlobalStyles from "./lib/styles/GlobalStyles";

const App = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <AppContainer>
        <NavBar />
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/todos" element={<div></div>} />
          <Route path="/clips" element={<div></div>} />
          <Route path="/videos" element={<div></div>} />
        </Routes>
      </AppContainer>
    </HashRouter>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
`;
