import React from "react";
import styled from "styled-components";

const FooterSection: React.FC = () => {
  return (
    <Wrapper>
      <FooterItem href="#">Privacy Policy</FooterItem>
      <span> • </span>
      <FooterItem href="#">Terms of Service</FooterItem>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 17px 0px;
  justify-content: center;
  text-align: center;
`;
const FooterItem = styled.a`
  text-decoration: none;
  color: #3c4043;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 4px 7px;
  font: 400 12px/16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  letter-spacing: 0.3px;

  &:hover {
    background-color: #f7f8f8;
  }
`;

export default FooterSection;
