import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Hamburger } from "./Hamburger";

describe("Hamburger", () => {
  it("renders 2 bars", () => {
    const { container } = render(
      <Hamburger onPress={vi.fn()} isOpened={false} />
    );
    const bars = container.querySelectorAll("button > span");
    expect(bars.length).toBe(2);
  });

  it("calls onPress when clicked", () => {
    const onPress = vi.fn();
    render(<Hamburger onPress={onPress} isOpened={false} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onPress).toHaveBeenCalledOnce();
  });

  it("has accessible aria-label", () => {
    render(<Hamburger onPress={vi.fn()} isOpened={false} />);
    expect(screen.getByLabelText("Toggle menu")).toBeDefined();
  });

  it("sets aria-expanded when opened", () => {
    render(<Hamburger onPress={vi.fn()} isOpened={true} />);
    const button = screen.getByRole("button");
    expect(button.getAttribute("aria-expanded")).toBe("true");
  });
});
