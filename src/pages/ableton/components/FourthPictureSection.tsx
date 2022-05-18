import styled from "styled-components";
import React from "react";
const leftImageUrl =
  "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

interface Props {}

const FourthPictureSection: React.FC<Props> = () => {
  return (
    <Wrapper>
      <LeftImage src={leftImageUrl} />
      <BackgroundAccentColour>
        We're really proud of the work we've done so far. But there's so much
        more to come. If you'd like to be a part of it, please join us.
      </BackgroundAccentColour>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 150px 0;
  gap: 100px;
  align-items: center;
  justify-content: center;
`;

const BackgroundAccentColour = styled.div`
  background-color: #b1c5ff;
  width: 500px;
  height: 100%;
`;

const LeftImage = styled.img`
  margin-top: 100px;
  width: 500px;
  height: 400px;
  object-fit: cover;
`;

export default FourthPictureSection;
