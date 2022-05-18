import styled from "styled-components";
import React from "react";
const leftImageUrl =
  "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
const rightImageUrl =
  "https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

interface Props {}

const ThirdPictureSection: React.FC<Props> = () => {
  return (
    <Wrapper>
      <BackgroundAccentColour />
      <LeftImage src={leftImageUrl} />
      <RightImage src={rightImageUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 150px 0;
  position: relative;
  gap: 100px;
  align-items: center;
`;

const BackgroundAccentColour = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #b6ffc0;
  width: 60%;
  margin: auto;
`;

const LeftImage = styled.img`
  margin-top: 100px;
  position: relative;
  width: 500px;
  height: 400px;
  object-fit: cover;
  margin-left: 150px;
`;

const RightImage = styled.img`
  position: relative;
  object-fit: cover;
  height: 600px;
  width: 700px;
  margin: 150px 0px;
`;

export default ThirdPictureSection;
