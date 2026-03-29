type HamburgerProps = {
  onPress: () => void;
  isOpened: boolean;
};

export const Hamburger: React.FC<HamburgerProps> = ({
  onPress,
  isOpened,
}) => {
  return (
    <button
      onClick={onPress}
      className="flex flex-col w-[2.1rem] h-8 cursor-pointer items-center justify-around mt-1 mr-4 border-none bg-transparent z-50"
    >
      <div
        className={`w-[1.9rem] h-[0.2rem] bg-white rounded transition-all duration-500 ease-in-out origin-right ${
          isOpened ? "-rotate-45" : "rotate-0"
        }`}
      />
      <div
        className={`w-[1.9rem] h-[0.2rem] bg-white rounded transition-all duration-500 ease-in-out origin-right ${
          isOpened ? "translate-x-8 opacity-0" : "translate-x-0 opacity-100"
        }`}
      />
      <div
        className={`w-[1.9rem] h-[0.2rem] bg-white rounded transition-all duration-500 ease-in-out origin-right ${
          isOpened ? "rotate-45" : "rotate-0"
        }`}
      />
    </button>
  );
};
