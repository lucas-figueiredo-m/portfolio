import React from "react";
import { NavigationLink } from "@components/NavigationLink";

type MenuProps = {
  isOpened: boolean;
  onOverlayPress: () => void;
};

export const Menu: React.FC<MenuProps> = ({ isOpened, onOverlayPress }) => (
  <div
    onClick={onOverlayPress}
    className={`fixed p-0 m-0 w-full h-full flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-1000 top-0 left-0 overflow-hidden ${
      isOpened
        ? "backdrop-blur-[11.6px] bg-black/50 visible"
        : "backdrop-blur-0 bg-transparent invisible"
    }`}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed p-0 m-0 flex flex-col top-0 left-[30%] w-full h-full bg-[#8A3E37] transition-transform duration-500 ease-in-out ${
        isOpened ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="mt-20 ml-6">
        <NavigationLink url="/" label="Home" />

        <NavigationLink url="/work" label="Work" includes />
        <NavigationLink url="/projects" label="Projects" includes />
      </ul>
    </div>
  </div>
);
