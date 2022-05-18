import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper href="#">Ableton</LogoWrapper>
        <NavLinksWrapper>
          <NavItem href="#">Live</NavItem>
          <NavItem href="#">Push</NavItem>
          <NavItem href="#">Link</NavItem>
          <NavItem href="#">Shop</NavItem>
          <NavItem href="#">Packs</NavItem>
          <NavItem href="#">Help</NavItem>
          <NavItem href="#">More +</NavItem>
        </NavLinksWrapper>
        <RightWrapper>
          <NavItem href="#">Try Live for free</NavItem>
          <NavItem href="#">Log in or register</NavItem>
        </RightWrapper>
      </Wrapper>
      <StickyNav>
        <StickyNavItem href="#">About</StickyNavItem>
        <StickyNavItem href="#">Jobs</StickyNavItem>
        <StickyNavItem href="#">Apprenticeships</StickyNavItem>
      </StickyNav>
    </>
  );
};

const StickyNav = styled.div`
  position: sticky;
  gap: 24px;
  top: 0;
  display: flex;
  padding: 0px 24px;
  opacity: 90%;
  background-color: white;
`;

const StickyNavItem = styled.a`
  padding: 12px;
  text-decoration: none;
  color: currentColor;
  &:hover {
    background-color: #dee2e6;
  }
`;

const Wrapper = styled.nav`
  display: flex;
  border-bottom: 2px solid #e9ecef;
  align-items: baseline;
  padding: 0px 24px;
`;

const LogoWrapper = styled.a`
  font-size: 2rem;
  padding: 6px;
  margin-right: 24px;
  text-decoration: none;
  color: currentColor;
`;
const NavLinksWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 24px;
`;
const RightWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
const NavItem = styled.a`
  padding: 24spx 12px 12px;
  text-decoration: none;
  color: currentColor;
  &:hover {
    background-color: #dee2e6;
  }
`;

export default Header;
