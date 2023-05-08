import React from "react";
import { MenuContainer, MenuOverlay } from "./styles";
import { NavigationLink } from "@components/NavigationLink";

type MenuProps = {
  isOpened: boolean;
  onOverlayPress: () => void;
};

export const Menu: React.FC<MenuProps> = ({ isOpened, onOverlayPress }) => (
  <MenuOverlay onClick={onOverlayPress} isOpened={isOpened}>
    <MenuContainer onClick={() => null} isOpened={isOpened}>
      <ul>
        <NavigationLink url="/" label="Home" />
<<<<<<< Updated upstream
        <NavigationLink url="/work" label="Work" />
        <NavigationLink url="/projects" label="Projects" />
        <NavigationLink url="/blog" label="Blog" />
        <NavigationLink url="/courses" label="Courses" />
=======
        <NavigationLink url="/work" label="Work" includes />
        <NavigationLink url="/projects" label="Projects" includes />
        {/* <NavigationLink url="/blog" label="Blog" includes />
        <NavigationLink url="/courses" label="Courses" includes /> */}
>>>>>>> Stashed changes
      </ul>
    </MenuContainer>
  </MenuOverlay>
);
