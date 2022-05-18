import styled from "styled-components";
import React from "react";
import {
  FiBell,
  FiAlertCircle,
  FiAlertTriangle,
  FiAlignCenter,
  FiBold,
  FiLifeBuoy,
} from "react-icons/fi";
import NavItem from "../../components/NavItem";
import DarkModeButton from "../../components/DarkModeButton";

interface Props {}

const SideBar: React.FC<Props> = () => {
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
    <Nav>
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
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: var(--navigation-color);
  padding: 0px 0px;
  justify-content: flex-start;
  height: 100%;
`;

const Spacer = styled.div`
  flex: 1;
`;

const DarkModeButtonWrapper = styled.div`
  padding: 20px;
`;

export default SideBar;
