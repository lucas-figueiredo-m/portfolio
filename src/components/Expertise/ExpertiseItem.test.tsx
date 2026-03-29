import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExpertiseItem } from "./ExpertiseItem";

describe("ExpertiseItem", () => {
  const defaultProps = {
    icon: <svg data-testid="test-icon" />,
    title: "Mobile Development",
    description: "Building mobile apps with React Native.",
  };

  it("renders the icon", () => {
    render(<ExpertiseItem {...defaultProps} />);
    expect(screen.getByTestId("test-icon")).toBeDefined();
  });

  it("renders the title", () => {
    render(<ExpertiseItem {...defaultProps} />);
    expect(screen.getByText("Mobile Development")).toBeDefined();
  });

  it("renders the description", () => {
    render(<ExpertiseItem {...defaultProps} />);
    expect(
      screen.getByText("Building mobile apps with React Native.")
    ).toBeDefined();
  });

  it("renders with correct card styling", () => {
    const { container } = render(<ExpertiseItem {...defaultProps} />);
    const card = container.firstElementChild as HTMLElement;
    expect(card.className).toContain("bg-surface");
    expect(card.className).toContain("border-border");
  });
});
