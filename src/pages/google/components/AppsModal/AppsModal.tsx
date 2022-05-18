import styled from "styled-components";
import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import AppTile from "./AppTile";
import AppList from "./AppList.json";
interface AppsModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}
const AppsModal: React.FC<AppsModalProps> = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Modal>
        {AppList.map(({ name, imageSrc }, index) => (
          <AppTile appName={name} imageSrc={imageSrc} key={index} />
        ))}
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
  position: absolute;
  display: flex;
  justify-content: space-between;
  gap: 12px 10px;
  flex-wrap: wrap;
  right: 25px;
  top: 70px;
  background-color: white;
  width: 330px;
  height: 440px;
  padding: 15px 20px;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%),
    0px 2px 6px 2px rgb(60 64 67 / 15%);
`;

export default AppsModal;
