import styled from "styled-components";
import React from "react";
import UserIcon from "../assets/UserIcon.png";

interface Props {
  imageSrc: string;
  appName: string;
}

const AppTile: React.FC<Props> = ({ imageSrc, appName }) => {
  return (
    <Wrapper href="#">
      <AppIcon src={imageSrc} />
      <AppTitle>{appName}</AppTitle>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 84px;
  height: 84px;
  /* border: 1px black solid; */
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background-color: #e8f0fe;
  }
`;

const AppIcon = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const AppTitle = styled.div`
  color: #202124;
  font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0.09px;
  line-height: 18px;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default AppTile;
