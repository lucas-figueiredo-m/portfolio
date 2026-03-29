import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExperienceItem } from "./ExperienceItem";

vi.mock("@utils", () => ({
  dateUtils: {
    format: {
      yearOnly: (date: string) => new Date(date).getFullYear().toString(),
    },
  },
}));

describe("ExperienceItem", () => {
  const defaultProps = {
    from: "2020-06-15",
    to: "2023-06-15",
    title: "Acme Corp",
    description: "Built amazing things",
  };

  it("renders the company name", () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText("Acme Corp")).toBeDefined();
  });

  it("renders formatted date range", () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText("2020 - 2023")).toBeDefined();
  });

  it("renders the description", () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText("Built amazing things")).toBeDefined();
  });

  it("has hover effect classes on the inner div", () => {
    const { container } = render(<ExperienceItem {...defaultProps} />);
    const innerDiv = container.querySelector("div > div > div");
    expect(innerDiv?.className).toContain("group-hover:brightness-[1.3]");
    expect(innerDiv?.className).toContain("group-hover:-translate-y-5");
  });
});
