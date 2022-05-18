import styled from "styled-components";
import React, { useState } from "react";
import Tooltip, { useTooltip, TooltipPopup } from "@reach/tooltip";

import UserIconSrc from "../../assets/UserIcon.png";
import ProfileModal from "../ProfileModal";

const ProfileButton: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => {
    console.log("test");
    setOpen(false);
  };

  return (
    <Wrapper onClick={openModal}>
      <UserIcon src={UserIconSrc} />
      <TooltipWrapper>
        <TooltipRow>Google Account</TooltipRow>
        <TooltipRow>Michael Poulgrain</TooltipRow>
        <TooltipRow>michael.poulgrain@gmail.com</TooltipRow>
      </TooltipWrapper>
      <ProfileModal isOpen={isOpen} closeModal={closeModal} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border-radius: 50%;
  position: relative;
  padding: 4px;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0 1px 0 rgb(0 0 0 / 15%);
    background-color: rgba(60, 64, 67, 0.08);
  }
`;
const UserIcon = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const TooltipWrapper = styled.div`
  display: none;
  position: absolute;
  border-radius: 4px;
  width: max-content;
  text-align: left;
  bottom: 0;
  right: 0;
  background-color: rgba(60, 64, 67, 0.9);
  padding: 6px;
  color: white;
  transform: translateY(calc(100% + 5px));
  letter-spacing: 0.8px;
  font: 500 12px "Roboto", arial, sans-serif;

  ${Wrapper}:hover &,
  ${Wrapper}:focus & {
    display: initial;
  }
`;
const TooltipRow = styled.div`
  line-height: 16px;
  color: #bdc1c6;
  &:first-of-type {
    color: white;
  }
`;

export default ProfileButton;
