import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiMic, FiX } from "react-icons/fi";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
} from "@reach/combobox";
import SearchTerms from "./SearchTerms.json";
import SuggestionItem from "./SuggestionItem";
import BaseButton from "../BaseButton";

interface ClearButtonProps {
  isEmpty: boolean;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  function clearSearch() {
    setSearchTerm("");
  }
  return (
    <Wrapper
      aria-label="choose a fruit"
      openOnFocus
      onSelect={(item) => setSearchTerm(item)}
    >
      <InputWrapper>
        <SearchIcon />
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ClearButton isEmpty={searchTerm === ""} onClick={clearSearch}>
          <ClearIcon />
        </ClearButton>
        <SpeakButton>
          <SpeakIcon />
        </SpeakButton>
      </InputWrapper>
      <PopupWrapper portal={false}>
        <HorizontalLine />
        <SuggestionList>
          {SearchTerms.map((value, ind) => (
            <SuggestionItem value={value} key={ind} />
          ))}
        </SuggestionList>
        <ButtonWrapper>
          <BaseButton value="Google Search" />
          <BaseButton value="I'm Feeling Lucky" />
        </ButtonWrapper>
      </PopupWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Combobox)`
  /* display: flex; */
  position: relative;

  height: 46px;
  border-radius: 24px;

  border: 1px solid #dfe1e5;
  padding: 1px;

  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }

  &:focus-within {
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0px;
  }
`;

const InputWrapper = styled.label`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Input = styled(ComboboxInput)`
  border: none;
  outline: none;
  height: 100%;
  font-size: 16px;
  flex: 1 1;
`;
const PopupWrapper = styled(ComboboxPopover)`
  position: absolute;
  left: -1px;
  right: -1px;
  top: 45px;

  background-color: white;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
`;

const SuggestionList = styled(ComboboxList)``;
const HorizontalLine = styled.div`
  border-top: 1px solid #e8eaed;
  margin: 0 20px 0 14px;
  padding-bottom: 4px;
`;

const SearchIcon = styled(FiSearch)`
  color: rgb(154, 160, 166);
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const SpeakIcon = styled(FiMic)`
  color: rgb(154, 160, 166);
  width: 24px;
  height: 24px;
`;
const ClearButton = styled.button<ClearButtonProps>`
  display: ${(props) => (props.isEmpty ? "none" : "initial")};
  border: none;
  background: none;
  margin-right: 12px;
  cursor: pointer;
  border-right: 1px solid #dadce0;
`;

const ClearIcon = styled(FiX)`
  color: #70757a;
  width: 24px;
  height: 24px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px;
`;

const SpeakButton = styled.button`
  border: none;
  background: none;
  margin-right: 17px;
  cursor: pointer;
`;
export default SearchBar;
