import styled from "styled-components";
import React from "react";
const imageUrl =
  "https://images.unsplash.com/photo-1521604784100-e0318b4b2bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";
interface Props {}

const HeroSection: React.FC<Props> = () => {
  return (
    <Wrapper>
      <HeroText>Ableton</HeroText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  min-height: 80vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const HeroText = styled.div`
  font-size: 10rem;
  font-family: "Heebo", sans-serif;
  color: #ff764d;
  font-weight: 500;
`;
const HeroImage = styled.img`
  margin: 0 auto;
`;

export default HeroSection;
