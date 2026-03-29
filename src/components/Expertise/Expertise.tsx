import { SectionTitle } from "@components/SectionTitle";
import { ExpertiseItem } from "./ExpertiseItem";
import {
  IoPhonePortraitOutline,
  IoRocketOutline,
  IoConstructOutline,
} from "react-icons/io5";

const expertiseAreas = [
  {
    icon: <IoPhonePortraitOutline />,
    title: "Mobile Architecture",
    description:
      "Designing scalable React Native architectures from the ground up — navigation, state management, native modules, and the New Architecture (Fabric, Turbo Modules, JSI).",
  },
  {
    icon: <IoRocketOutline />,
    title: "Cross-Platform Performance",
    description:
      "Shipping high-performance apps for iOS and Android with Reanimated, Skia, Hermes, and platform-specific optimizations. Obsessed with 60fps.",
  },
  {
    icon: <IoConstructOutline />,
    title: "Mobile DevEx & Mentoring",
    description:
      "Establishing best practices, mentoring teams, and leading framework migrations. Focused on code quality, testing with Detox, and CI/CD with Fastlane and EAS.",
  },
];

export const Expertise: React.FC = () => {
  return (
    <section className="w-full">
      <SectionTitle label="Expertise" title="What I Do Best" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {expertiseAreas.map((area) => (
          <ExpertiseItem
            key={area.title}
            icon={area.icon}
            title={area.title}
            description={area.description}
          />
        ))}
      </div>
    </section>
  );
};
