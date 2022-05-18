import styled from "styled-components";
import React from "react";
import { FiBell, FiMenu, FiX } from "react-icons/fi";
import SearchBar from "../../components/SearchBar";
import AvatarImg from "../../assets/avatar.png";
import { QUERIES } from "../../constants";
import CompanyLogo from "../../components/CompanyLogo";
import MobileMenuModal from "../../components/MobileMenuModal";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const toggle = () => setShowDialog(!showDialog);
  // function openMenu() {}
  return (
    <Wrapper>
      <MenuIconWrapper onClick={toggle}>
        {showDialog ? <CloseIcon /> : <MenuIcon />}
        <MobileMenuModal isOpen={showDialog} onDismiss={close} />
      </MenuIconWrapper>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <CompanyLogoWrapper>
        <CompanyLogo />
      </CompanyLogoWrapper>
      {/* <Spacer /> */}
      <RightWrapper>
        <NotificationBell />
        <ProfileText>Michael Poulgrain</ProfileText>
        <Avatar src={AvatarImg} />
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(163, 171, 185, 0.26);
  background-color: var(--navigation-color);
  height: 100%;
`;
const MenuIconWrapper = styled.button`
  display: none;
  margin-left: 48px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 16px;
  @media ${QUERIES.phoneAndSmaller} {
    display: initial;
  }
`;

const MenuIcon = styled(FiMenu)`
  width: 26px;
  height: 26px;
  color: var(--text-on-background-color);
`;

const CloseIcon = styled(FiX)`
  width: 26px;
  height: 26px;
  color: var(--text-on-background-color);
`;
const CompanyLogoWrapper = styled.div`
  display: none;
  @media ${QUERIES.phoneAndSmaller} {
    display: initial;
  }
`;
const SearchBarWrapper = styled.div`
  width: 260px;
  margin-left: 48px;
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const NotificationBell = styled(FiBell)`
  color: var(---text-on-background-color);
  font-size: 1.4rem;
  margin: 8px 22px;
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const RightWrapper = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  max-height: 100%;
  height: 40px;
  width: 40px;
  margin-right: 48px;
`;

const ProfileText = styled.div`
  border-left: 1px solid var(--gray-color);
  padding: 8px 22px;
  color: var(--text-on-background-color);
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default NavBar;
