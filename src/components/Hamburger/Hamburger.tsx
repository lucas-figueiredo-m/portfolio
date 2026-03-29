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
      aria-label="Toggle menu"
      aria-expanded={isOpened}
      className="relative flex items-center justify-center w-6 h-6 cursor-pointer border-none bg-transparent z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span
        className={`absolute block w-5 h-[1.5px] bg-text-primary rounded-full transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          isOpened ? "rotate-45 translate-y-0" : "-translate-y-[5px]"
        }`}
      />
      <span
        className={`absolute block w-5 h-[1.5px] bg-text-primary rounded-full transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
          isOpened ? "-rotate-45 translate-y-0" : "translate-y-[5px]"
        }`}
      />
    </button>
  );
};
