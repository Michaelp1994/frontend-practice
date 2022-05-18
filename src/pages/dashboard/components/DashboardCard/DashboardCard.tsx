import React from "react";
import styled from "styled-components";
import image from "../../assets/intro.svg";
import { QUERIES } from "../../constants";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <CardTitle>Welcome to your dashboard!</CardTitle>
        <CardText>
          Try our new Admin Dashboard Template, build with live Ant-Design
          components. Customize it to your needs and release to production!
        </CardText>
      </LeftWrapper>
      <Image src={image} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  background-color: var(--secondary-color);
  padding: 36px;
  border-radius: 8px;
  height: 100%;
  @media ${QUERIES.phoneAndSmaller} {
    /* align-items: center; */
  }
`;

const CardTitle = styled.h2`
  font-size: ${18 / 16}rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  line-height: 1.83;
`;

const LeftWrapper = styled.div`
  flex: 1;
`;
const Image = styled.img`
  flex: 1;
  max-height: 250px;
`;
export default Dashboard;
