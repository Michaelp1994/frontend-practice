import styled from "styled-components";
import React, { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import AppsModal from "../AppsModal";

const AppsButton: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);
  return (
    <Wrapper onClick={openModal}>
      <GridIcon />
      <TooltipWrapper>Google apps</TooltipWrapper>
      <AppsModal isOpen={showDialog} onDismiss={closeModal} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: block;
  padding: 10px;
  position: relative;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #5f6368;
  &:hover,
  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 1px 0 rgb(0 0 0 / 15%);
    background-color: rgba(60, 64, 67, 0.08);
  }
`;

const GridIcon = styled(BsGrid3X3GapFill)`
  width: 24px;
  height: 24px;
`;

const TooltipWrapper = styled.div`
  position: absolute;
  border-radius: 4px;
  width: max-content;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #4f5355;
  padding: 6px;
  transform: translateY(calc(100% + 5px)) translateX(-25%);
  color: white;
  display: none;

  ${Wrapper}:hover &,
  ${Wrapper}:focus & {
    display: initial;
  }
`;

export default AppsButton;
