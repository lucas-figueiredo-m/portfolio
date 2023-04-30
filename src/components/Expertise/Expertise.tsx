import { SectionTitle } from "@components/SectionTitle";
import { Container, ExpertiseContainer } from "./styles";
import { ExpertiseItem } from "./ExpertiseItem";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { TsIcon } from "@assets/icons";
import { useMediaQuery } from "@hooks/useMediaQuery";

export const Expertise: React.FC = () => {
  const isSmallScreen = useMediaQuery(700);

  const reactNativeLabel = () => {
    if (isSmallScreen) {
      return (
        <>
          React
          <br />
          Native
        </>
      );
    }

    return "React Native";
  };
  return (
    <Container>
      <SectionTitle title="Expert in" />
      <ExpertiseContainer>
        <ExpertiseItem
          hoverColor="rgb(238, 211, 57)"
          icon={<IoLogoJavascript />}
          label="JavaScript"
        />
        <ExpertiseItem
          hoverColor="rgb(130, 215, 247)"
          icon={<IoLogoReact />}
          label={reactNativeLabel()}
        />
        <ExpertiseItem
          hoverColor="rgb(52, 120, 198)"
          icon={<TsIcon />}
          label="TypeScript"
        />
      </ExpertiseContainer>
      <section>
        <div />
        <h2>Complete Tech Stack</h2>
        <div />
      </section>
    </Container>
  );
};
