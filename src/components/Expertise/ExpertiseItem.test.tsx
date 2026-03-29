import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExpertiseItem } from "./ExpertiseItem";

describe("ExpertiseItem", () => {
  const defaultProps = {
    icon: <svg data-testid="test-icon" />,
    label: "React",
    hoverColor: "#61DAFB",
  };

  it("renders the icon", () => {
    render(<ExpertiseItem {...defaultProps} />);
    expect(screen.getByTestId("test-icon")).toBeDefined();
  });

  it("renders the label", () => {
    render(<ExpertiseItem {...defaultProps} />);
    expect(screen.getByText("React")).toBeDefined();
  });

  it("renders a ReactNode label", () => {
    render(
      <ExpertiseItem
        icon={<svg data-testid="test-icon" />}
        label={<span>Custom Label</span>}
        hoverColor="#000"
      />
    );
    expect(screen.getByText("Custom Label")).toBeDefined();
  });

  it("sets the hover color as a CSS custom property", () => {
    const { container } = render(<ExpertiseItem {...defaultProps} />);
    const outerDiv = container.firstElementChild as HTMLElement;
    expect(outerDiv.style.getPropertyValue("--hover-color")).toBe("#61DAFB");
  });

  it("has hover color classes referencing the CSS variable", () => {
    const { container } = render(<ExpertiseItem {...defaultProps} />);
    const iconWrapper = container.querySelector(".peer");
    expect(iconWrapper?.className).toContain(
      "hover:[&>svg]:fill-[var(--hover-color)]"
    );
  });
});
