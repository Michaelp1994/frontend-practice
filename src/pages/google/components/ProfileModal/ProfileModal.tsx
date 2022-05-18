import React from "react";
import styled from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import ProfileSection from "./ProfileSection";
import FooterSection from "./FooterSection";
import OtherProfilesSection from "./OtherProfilesSection";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ProfileModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={closeModal}>
      <Modal aria-label="Profile Options">
        <ProfileSection />
        <OtherProfilesSection />
        <SignOutSection>
          <SignOutButton href="#">Sign out of all accounts</SignOutButton>
        </SignOutSection>
        <FooterSection />
      </Modal>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Modal = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  overflow: auto;
  position: absolute;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  right: 25px;
  top: 70px;
  width: 367px;
  box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%),
    0px 2px 6px 2px rgb(60 64 67 / 15%);
`;

const SignOutSection = styled.div`
  border-bottom: 1px solid #dadce0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 16px;
`;
const SignOutButton = styled.a`
  display: block;
  border: 1px solid #dadce0;
  color: #3c4043;
  padding: 8px 24px;
  text-align: center;
  width: 205px;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background-color: #f7f8f8;
  }
`;

export default ProfileModal;
