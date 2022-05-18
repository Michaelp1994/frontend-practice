import styled from "styled-components";
import React from "react";
const leftImageUrl =
  "https://images.unsplash.com/photo-1593697972646-2f348871bd56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80 ";

const rightImageUrl =
  "https://images.unsplash.com/photo-1613759612065-d5971d32ca49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80 ";

interface Props {}

const PictureSection: React.FC<Props> = () => {
  return (
    <Wrapper>
      <YellowBackground />
      <LeftImage src={leftImageUrl} />
      <RightImage src={rightImageUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 150px 0;
  position: relative;
  height: 80vh;
  gap: 100px;
  align-items: center;
`;

const YellowBackground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #fbffa7;
  width: 66%;
  height: 100%;
`;

const LeftImage = styled.img`
  margin-left: 100px;
  position: relative;
  width: 600px;
  height: 600px;
  object-fit: cover;
`;

const RightImage = styled.img`
  position: relative;
  object-fit: cover;
  height: 500px;
  width: 500px;
`;

export default PictureSection;
