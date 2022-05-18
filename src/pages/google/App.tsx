import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleLogoSrc from "./assets/GoogleLogo.png";
import SearchBar from "./components/SearchBar";
import BaseButton from "./components/BaseButton";
import GlobalStyles from "./components/GlobalStyles";
const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <ContentWrapper>
        <GoogleLogo src={GoogleLogoSrc} />
      </ContentWrapper>
      <MiddleWrapper>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        <ButtonRow>
          <BaseButton value="Google Search" />
          <BaseButton value="I'm Feeling Lucky" />
        </ButtonRow>
      </MiddleWrapper>
      <TextWrapper>
        Google offered in: <LanguageLink href="#">Nederlands</LanguageLink>{" "}
        <LanguageLink href="#">Frysk</LanguageLink>
      </TextWrapper>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  /* grid-template-rows: auto 1fr auto; */
`;

const SearchBarWrapper = styled.div`
  min-width: 400px;
  width: 100%;
  max-width: 584px;
`;
const LanguageLink = styled.a`
  /* ... */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const ButtonRow = styled.div`
  margin-top: 29px;
  margin-bottom: 23px;
  display: flex;
  gap: 12px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  max-height: 290px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const GoogleLogo = styled.img`
  width: 272px;
  height: 92px;
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 20px;
`;

export default App;
