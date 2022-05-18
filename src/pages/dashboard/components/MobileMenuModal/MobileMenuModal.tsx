import React from "react";
import styled from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import {
  FiBell,
  FiAlertCircle,
  FiAlertTriangle,
  FiAlignCenter,
  FiBold,
  FiLifeBuoy,
} from "react-icons/fi";
import SearchBar from "../../components/SearchBar";
import NavItem from "../../components/NavItem";
import DarkModeButton from "../../components/DarkModeButton";

interface Props {
  isOpen: boolean;
  onDismiss: () => any;
}

const MobileMenuModal: React.FC<Props> = ({ isOpen, onDismiss }) => {
  const menu = [
    { title: "Dashboard", href: "/", icon: FiBell },
    { title: "Orders", href: "#orders", icon: FiAlertCircle },
    { title: "Account", href: "#account", icon: FiAlertTriangle },
    { title: "Settings", href: "#settings", icon: FiAlignCenter },
    {
      title: "Support",
      href: "#support",
      icon: FiBold,
      subMenu: [
        { title: "Chat", href: "#chat", icon: FiBold },
        { title: "FAQ", href: "#faq", icon: FiLifeBuoy },
      ],
    },
  ];
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <ModalContent aria-label="Menu">
        {/* <HeaderWrapper></HeaderWrapper> */}
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        {menu.map((item) => (
          <NavItem
            href={item.href}
            key={item.title}
            icon={item.icon}
            title={item.title}
            subMenu={item.subMenu}
          />
        ))}
        <Spacer />
        <DarkModeButtonWrapper>
          <DarkModeButton />
        </DarkModeButtonWrapper>
      </ModalContent>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 75px;
  bottom: 0;
  right: 0;
  left: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  place-items: center;
`;

const SearchBarWrapper = styled.div`
  margin-bottom: 28px;
`;
// const HeaderWrapper = styled.div`
//   height: 200px;
//   margin-bottom: 24px;
// `;

const Spacer = styled.div`
  flex: 1;
`;
const DarkModeButtonWrapper = styled.div`
  margin-bottom: 55;
  align-self: center;
`;
const ModalContent = styled(DialogContent)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  height: 100%;
  background-color: var(--navigation-color);
`;
export default MobileMenuModal;
