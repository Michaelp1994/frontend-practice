import React from "react";
import styled from "styled-components";

const CompanyLogo: React.FC = () => {
  return (
    <CompanyName href="#">
      y<UnderlineText>o</UnderlineText>url<UnderlineText>o</UnderlineText>g
      <OverlineText>o</OverlineText>
    </CompanyName>
  );
};

const CompanyName = styled.a`
  display: block;
  font-size: 2rem;
  padding: 18px 1px;
  color: var(--logo-color);
  text-decoration: none;
`;

const UnderlineText = styled.span`
  text-decoration: underline;
  transition: text-underline-offset 300ms;
  text-decoration-color: var(--primary-color);
  ${CompanyName}:hover & {
    text-underline-offset: -0.75em;
  }
`;

const OverlineText = styled.span`
  text-decoration: underline;
  text-decoration-color: var(--secondary-color);

  text-underline-offset: -0.75em;
  ${CompanyName}:hover & {
    text-underline-offset: 0em;
  }
`;

export default CompanyLogo;
