import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import GlobalStyles from "../../globalStyles";
import loginSrc from "../../assets/login.svg";
import CompanyLogo from "../../components/CompanyLogo";
import { lightTheme, darkTheme } from "../../themeStyles";
import DarkModeButton from "../../components/DarkModeButton";
import { QUERIES } from "../../constants/index";
import { RootState } from "../../store";
import LoginForm from "../../components/LoginForm";

interface Props {}

const Login: React.FC<Props> = () => {
  const theme = useSelector((state: RootState) => state.mode.mode);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Wrapper>
        <CompanyLogoWrapper>
          <CompanyLogo />
        </CompanyLogoWrapper>
        <CardWrapper>
          <LeftWrapper>
            <LoginForm />
          </LeftWrapper>
          <LoginImg src={loginSrc} />
        </CardWrapper>
        <DarkModeWrapper>
          <DarkModeButton />
        </DarkModeWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  background-color: var(--background-color);
  min-height: 100%;
  display: grid;
  max-width: 100%;
  grid-template-rows: 100px 1fr 100px;
  @media ${QUERIES.phoneAndSmaller} {
    place-items: center;
  }
`;
const CompanyLogoWrapper = styled.div`
  margin: 18px 36px;
  @media ${QUERIES.phoneAndSmaller} {
    margin: 0px;
  }
`;

const CardWrapper = styled.div`
  background-color: var(--card-color);
  color: var(--card-text-color);
  place-self: center;
  border-radius: 8px;
  padding: 45px 40px;
  margin: 24px;
  width: 80%;
  max-width: 700px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const LeftWrapper = styled.div`
  flex: 1;
  min-width: 275px;
`;

const DarkModeWrapper = styled.div`
  margin-left: 36px;
  margin-bottom: 36px;
  @media ${QUERIES.phoneAndSmaller} {
    margin: 0px;
  }
`;

const LoginImg = styled.img`
  flex: 1;
  justify-self: center;
  min-width: 275px;
`;

export default Login;
