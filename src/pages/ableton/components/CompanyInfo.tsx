import styled from "styled-components";
import React from "react";

interface Props {}

const CompanyInfo: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Heading>
        We make Live, Push and Link — unique software and hardware for music
        creation and performance. With these products, our community of users
        creates amazing things.
      </Heading>
      <Text>
        Ableton was founded in 1999 and released the first version of Live in
        2001. Our products are used by a community of dedicated musicians, sound
        designers, and artists from across the world.
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const Heading = styled.h1`
  font-weight: 600;
  font-size: 2rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

export default CompanyInfo;
