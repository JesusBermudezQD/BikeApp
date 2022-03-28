import React, { useState } from "react";
import Home from "./pages/Home";

import styled, { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyled = createGlobalStyle`
  *{
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,900&display=swap');
    padding:0;
    margin:0;
    font-family: "Poppins", sans-serif;
  }
`;

  return (
    <div>
      <GlobalStyled />
      <Home />
    </div>
  );
}

export default App;
