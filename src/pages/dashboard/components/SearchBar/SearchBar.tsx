import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import React from "react";

interface Props {}

const SearchBar: React.FC<Props> = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input placeholder="Search" />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
`;

const Input = styled.input`
  background-color: var(--gray-color);
  border: 0px;
  padding: 10px 43px;
  border-radius: 54px;
  width: 100%;
  &::placeholder {
    color: var(--dark-gray-color);
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  margin: auto 18px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 16px;
  height: 16px;
  color: var(--dark-gray-color); ;
`;
export default SearchBar;
