import { SectionTitle } from "@components/SectionTitle";
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
    <section className="w-full">
      <SectionTitle title="Expert in" />
      <div className="flex flex-row items-center">
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
      </div>
      <section className="flex flex-row w-full gap-8 items-center mt-20">
        <div className="flex flex-row flex-1 border-b-2 border-[#FF2D19]" />
        <h2 className="text-white text-[1.8rem] max-[450px]:text-[1.3rem]">
          Complete Tech Stack
        </h2>
        <div className="flex flex-row flex-1 border-b-2 border-[#FF2D19]" />
      </section>
    </section>
  );
};
