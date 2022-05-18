import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { IconType } from "react-icons/lib";

interface ChildProps {
  title: string;
  href?: string;
  icon?: IconType;
  subMenu?: any[];
}

type Props = ChildProps;

const NavItem: React.FC<Props> = ({ title, href = "", icon, subMenu }) => {
  if (subMenu && subMenu.length) {
    return (
      <SubMenuWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        {subMenu.map((item) => (
          <SubMenuLink to={item.href} key={item.href}>
            <NavIcon as={item.icon} />
            <NavText>{item.title}</NavText>
          </SubMenuLink>
        ))}
      </SubMenuWrapper>
    );
  }
  return (
    <LinkWrapper to={href}>
      <NavIcon as={icon} />
      <NavText>{title}</NavText>
    </LinkWrapper>
  );
};

NavItem.defaultProps = {
  subMenu: [],
  href: "",
  icon: undefined,
};

const TitleWrapper = styled.div`
  display: flex;
  text-decoration: none;
  color: var(--dark-gray-color);
`;

const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray-color);
`;

const SubMenuLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-items: center;
  align-items: center;
  color: black;
  padding: 12px 16px;
  &:hover {
    color: blue;
  }
`;

const LinkWrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-items: center;
  align-items: center;
  color: black;
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray-color);
  &:hover {
    color: blue;
  }
`;

const NavIcon = styled.svg`
  margin-right: 14px;
  font-size: 1.1rem;
  color: var(--navigation-text-color);
`;
const NavText = styled.div`
  font-size: 1rem;
  color: var(--navigation-text-color);
`;

export default NavItem;
