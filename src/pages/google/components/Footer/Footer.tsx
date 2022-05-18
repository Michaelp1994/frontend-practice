import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <TopBar>Netherlands</TopBar>
      <BottomBar>
        <LeftSide>
          <FooterItem href="#">About</FooterItem>
          <FooterItem href="#">Advertising</FooterItem>
          <FooterItem href="#">Business</FooterItem>
          <FooterItem href="#">How Search works</FooterItem>
        </LeftSide>
        <RightSide>
          <FooterItem href="#">Privacy</FooterItem>
          <FooterItem href="#">Terms</FooterItem>
          <FooterItem href="#">Settings</FooterItem>
        </RightSide>
      </BottomBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f2f2f2;
`;

const TopBar = styled.div`
  font-size: 15px;
  padding: 15px 30px;
  color: #70757a;
  border-bottom: 1px solid #dadce0;
`;
const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline: 20px;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const RightSide = styled.div`
  display: flex;
  align-content: center;
`;

const FooterItem = styled.a`
  display: block;
  text-decoration: none;
  color: #70757a;
  padding: 15px;
  &:hover {
    text-decoration: underline;
  }
`;
export default Footer;
