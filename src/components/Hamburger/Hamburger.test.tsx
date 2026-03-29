import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Hamburger } from "./Hamburger";

describe("Hamburger", () => {
  it("renders 3 bars", () => {
    const { container } = render(
      <Hamburger onPress={vi.fn()} isOpened={false} />
    );
    const bars = container.querySelectorAll("button > div");
    expect(bars.length).toBe(3);
  });

  it("calls onPress when clicked", () => {
    const onPress = vi.fn();
    render(<Hamburger onPress={onPress} isOpened={false} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onPress).toHaveBeenCalledOnce();
  });
});
