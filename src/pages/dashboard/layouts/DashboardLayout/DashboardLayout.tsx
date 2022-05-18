import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyles from "../../globalStyles";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import CompanyLogo from "../../components/CompanyLogo";
import { lightTheme, darkTheme } from "../../themeStyles";
import { QUERIES } from "../../constants";
import { RootState } from "../../store";
import DarkModeButton from "../../components/DarkModeButton";

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.mode.mode);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Wrapper>
        <GlobalStyles />
        <CompanyWrapper>
          <CompanyLogo />
        </CompanyWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
        <Main>
          <Outlet />
        </Main>
        <DarkModeButtonWrapper>
          <DarkModeButton />
        </DarkModeButtonWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: 200px 5fr 1fr;
  grid-template-rows: 75px 1fr auto;
  background-color: ${(props) => props.theme.colors.background};
`;

const CompanyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--logo-background-color);
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  grid-column: 2 / -1;
  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1 / -1;
  }
`;
const SideBarWrapper = styled.div`
  grid-column: 1 / 2;
  /* border: 1px black solid; */
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Main = styled.main`
  grid-column: 2 / -1;
  background-color: var(--background-color);
  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/ -1;
  }
`;

const DarkModeButtonWrapper = styled.div`
  display: none;
  grid-row-end: -1;
  grid-column: 1 / -1;
  place-self: center;
  margin-top: 41px;
  margin-bottom: 51px;
  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
  }
`;
export default App;
