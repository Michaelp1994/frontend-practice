import React from "react";
import styled from "styled-components";

import ProfileButton from "../ProfileButton";
import AppsButton from "../AppsButton";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <TextLinkWrapper>
        <TextLink href="#">Gmail</TextLink>
        <TextLink href="#">Images</TextLink>
      </TextLinkWrapper>
      <AppsButton />
      <ProfileButton />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  font-size: 13px;
  margin: 14px 18px;
`;

const TextLinkWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: baseline;
`;

const TextLink = styled.a`
  color: #000000;
  text-decoration: none;
  line-height: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
