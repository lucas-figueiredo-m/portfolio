import React from "react";
import { SectionTitle } from "@components/SectionTitle";

const techCategories = [
  {
    title: "Core",
    technologies: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Swift",
    ],
  },
  {
    title: "Architecture & State",
    technologies: [
      "React Navigation",
      "Redux",
      "Jotai",
      "Zustand",
      "React Query",
      "MMKV",
    ],
  },
  {
    title: "Performance & UI",
    technologies: [
      "Reanimated",
      "Skia",
      "Hermes",
      "Fabric",
      "Turbo Modules",
      "JSI",
    ],
  },
  {
    title: "Testing & CI/CD",
    technologies: [
      "Detox",
      "Maestro",
      "Jest",
      "Fastlane",
      "EAS Build",
      "CodePush",
    ],
  },
  {
    title: "Monitoring & Tools",
    technologies: [
      "Sentry",
      "Firebase",
      "Crashlytics",
      "Flipper",
      "XCode",
      "Android Studio",
    ],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section className="w-full">
      <SectionTitle label="Tech Stack" title="Technologies" />
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {techCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-semibold text-text-primary mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
