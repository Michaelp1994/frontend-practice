import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
}

const BaseButton: React.FC<Props> = ({ value }) => {
  return <Button type="submit" value={value} />;
};

const Button = styled.input`
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  padding: 4px 16px;
  line-height: 27px;
  cursor: pointer;

  &:focus {
    border: 1px blue solid;
  }

  &:hover {
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    background-color: #f8f9fa;
    border: 1px solid #dadce0;
    color: #202124;
  }
`;

export default BaseButton;
