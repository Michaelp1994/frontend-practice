import styled from "styled-components";
import React, { useState } from "react";
import OtherUserIcon from "../../assets/OtherUserIcon.png";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface AccordionProps {
  isOpen: boolean;
}

const OtherProfileItem = () => {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  return (
    <Wrapper onClick={handleClick}>
      <ProfileImage src={OtherUserIcon} />
      <ProfileText>
        <ProfileName>First L</ProfileName>
        <ProfileEmail>
          firstlastname@gmail.com
          <AccordionStatusIcon as={isOpen ? FiChevronUp : FiChevronDown} />
          {/* // <span> {isOpen ? <FiChevronUp /> : <FiChevronDown />}</span> */}
        </ProfileEmail>
      </ProfileText>
      <ProfileStatus>Signed out</ProfileStatus>
      <ProfileOptions isOpen={isOpen}>
        <SignInButton href="#signIn">Sign in</SignInButton>
        <RemoveButton href="#remove">Remove</RemoveButton>
      </ProfileOptions>
    </Wrapper>
  );
};

const AccordionStatusIcon = styled.svg`
  display: inline-block;
  margin-left: 6px;
  margin-bottom: -4px;
  width: 16px;
  height: 16px;
`;

const Wrapper = styled.button`
  min-height: 60px;
  padding: 11px 32px 15px;
  text-decoration: none;
  border: none;
  background-color: inherit;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f7f8f8;
  }
`;

const ProfileImage = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const ProfileOptions = styled.div<AccordionProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  /* display: none; */
  margin-top: 12px;
  justify-content: center;
  gap: 12px;
`;

const SignInButton = styled.a`
  display: block;
  padding: 7px 23px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #1a73e8;
  border: none;
  color: #fff;
  font: 500 14px/20px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.25px;
`;

const RemoveButton = styled.a`
  display: block;
  border-radius: 4px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dadce0;
  color: #3c4043;
  margin-right: 12px;
  padding: 8px 24px;
  font: 500 14px/20px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.25px;
`;

const ProfileText = styled.div`
  display: inline-block;

  margin-left: 12px;
  flex: 1;
`;

const ProfileName = styled.div`
  color: #3c4043;
  font: 500 14px/20px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.25px;
`;

const ProfileEmail = styled.div`
  color: #5f6368;
  font: 400 12px/16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  letter-spacing: 0.3px;
`;

const ProfileStatus = styled.div`
  display: block;
  float: right;
  color: #5f6368;
  font: 400 12px/16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-style: italic;

  letter-spacing: 0.3px;
`;

export default OtherProfileItem;
