import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <h1>Hello from React!</h1>
    </AppContainer>
  );
};

export default hot(module)(App);

const AppContainer = styled.div``;
