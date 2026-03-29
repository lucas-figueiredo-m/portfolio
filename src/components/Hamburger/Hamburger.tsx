import { StyledBurguer } from "./styles";

type HamburgerProps = {
  onPress: () => void;
  isOpened: boolean;
};

export const Hamburger: React.FC<HamburgerProps> = ({
  onPress,
  isOpened,
}) => {
  return (
    <StyledBurguer onClick={onPress} isOpened={isOpened}>
      <div />
      <div />
      <div />
    </StyledBurguer>
  );
};
