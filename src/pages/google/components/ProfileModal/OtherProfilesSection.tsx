import React from "react";
import styled from "styled-components";
import OtherProfileItem from "../OtherProfileItem";
import { FiUserPlus } from "react-icons/fi";

const OtherProfilesSection: React.FC = () => {
  return (
    <Wrapper>
      <OtherProfileItem />
      <AddAccountLink href="#">
        <IconWrapper>
          <AddAccountIcon />
        </IconWrapper>
        <AddAccountText>Add another account</AddAccountText>
      </AddAccountLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dadce0;
  border-top: 1px solid #dadce0;
`;

const AddAccountIcon = styled(FiUserPlus)`
  width: 20px;
  height: 20px;
`;
const AddAccountText = styled.div`
  text-decoration: none;
`;
const IconWrapper = styled.div`
  padding-right: 16px;
`;
const AddAccountLink = styled.a`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 11px 32px 15px;
  color: #3c4043;
  font: 500 14px/20px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.25px;
  text-decoration: none;
  &:hover {
    background-color: #f7f8f8;
  }
`;

export default OtherProfilesSection;
