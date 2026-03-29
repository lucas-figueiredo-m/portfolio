import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExperienceItem } from "./ExperienceItem";

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

  it("renders formatted date range using Intl.DateTimeFormat", () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText(/Jun 2020/)).toBeDefined();
    expect(screen.getByText(/Jun 2023/)).toBeDefined();
  });

  it("renders the description", () => {
    render(<ExperienceItem {...defaultProps} />);
    expect(screen.getByText("Built amazing things")).toBeDefined();
  });

  it("has subtle hover styling classes", () => {
    const { container } = render(<ExperienceItem {...defaultProps} />);
    const wrapper = container.querySelector("[role='article']");
    expect(wrapper?.className).toContain("hover:bg-surface/50");
    expect(wrapper?.className).toContain("hover:border-accent");
  });

  it("is focusable with focus-visible styles", () => {
    const { container } = render(<ExperienceItem {...defaultProps} />);
    const wrapper = container.querySelector("[role='article']");
    expect(wrapper?.getAttribute("tabindex")).toBe("0");
    expect(wrapper?.className).toContain("focus-visible:ring-2");
  });
});
