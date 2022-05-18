import React from "react";
import styled from "styled-components";

import UserIconSrc from "../../assets/UserIcon.png";
import { FiCamera } from "react-icons/fi";

const ProfileSection = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ProfileImg src={UserIconSrc} />
        <AddPhotoButton>
          <AddPhotoIcon />
        </AddPhotoButton>
      </ImageWrapper>
      <ProfileName>Michael Poulgrain</ProfileName>
      <ProfileEmail>michael.poulgrain@gmail.com</ProfileEmail>
      <ManageAccountButton href="#">
        Manage your Google Account
      </ManageAccountButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 1px black solid; */
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const AddPhotoButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: -10px;
  border-radius: 50%;
  padding: 2px;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
    0px 1px 3px 1px rgb(60 64 67 / 15%);
  color: #3c4043;
  &:hover {
    color: #1a73e8;
    background: #f6f9fd;
  }
`;

const AddPhotoIcon = styled(FiCamera)`
  margin: 5px;
  height: 16px;
  width: 16px;
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const ProfileName = styled.div`
  color: #202124;
  font: 500 16px/24px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.1px;
`;

const ProfileEmail = styled.div`
  color: #5f6368;
  margin-bottom: 16px;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-weight: 400;
  letter-spacing: 0.2px;
`;

const ManageAccountButton = styled.a`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: currentColor;
  border: 1px solid #dadce0;
  margin-bottom: 20px;
  border-radius: 100px;
  font: 500 14px/20px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.25px;
  color: #3c4043;
  &:hover {
    background-color: #f7f8f8;
  }
`;

export default ProfileSection;
