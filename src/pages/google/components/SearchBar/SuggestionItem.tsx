import React from "react";
import styled from "styled-components";
import { ComboboxOption, ComboboxOptionText } from "@reach/combobox";
import { FiClock, FiX } from "react-icons/fi";

interface Props {
  value: string;
}

const SuggestionItem: React.FC<Props> = ({ value }) => {
  return (
    <Wrapper value={value}>
      <SearchIcon />
      <Text />
      <RemoveButton> Remove</RemoveButton>
    </Wrapper>
  );
};
const Wrapper = styled(ComboboxOption)`
  padding: 7px;
  user-select: none;
  &:hover {
    background-color: #eee;
  }
`;

const SearchIcon = styled(FiClock)`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
`;

const Text = styled(ComboboxOptionText)``;

const RemoveButton = styled.a`
  float: right;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;

export default SuggestionItem;
