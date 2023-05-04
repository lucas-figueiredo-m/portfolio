import { StyledBurguer } from "./styles";

type HamburguerProps = {
  onPress: () => void;
  isOpened: boolean;
};

export const Hamburguer: React.FC<HamburguerProps> = ({
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
