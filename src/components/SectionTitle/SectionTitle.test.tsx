import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionTitle } from "./SectionTitle";

describe("SectionTitle", () => {
  it("renders the title text with # prefix", () => {
    render(<SectionTitle title="Portfolio" />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "#Portfolio"
    );
  });

  it("renders description when provided", () => {
    render(<SectionTitle title="Portfolio" description="My work" />);
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe(
      "My work"
    );
  });

  it("does not render description when not provided", () => {
    render(<SectionTitle title="Portfolio" />);
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
  });
});
