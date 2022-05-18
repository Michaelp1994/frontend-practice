import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../store/modeSlice";
import { RootState } from "../../store";

interface Props {}

const DarkModeButton: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.mode.mode);
  const ButtonText = theme === "light" ? "Dark Mode" : "Light Mode";
  function toggleDarkMode() {
    dispatch(toggle());
  }

  return <Button onClick={toggleDarkMode}>{ButtonText}</Button>;
};

const Button = styled.button`
  padding: 12px 40px;
  //margin: 24px;
  color: var(--button-color);
  background-color: transparent;
  border: 1px solid currentColor;
  border-radius: 8px;
  cursor: pointer;
`;

export default DarkModeButton;
