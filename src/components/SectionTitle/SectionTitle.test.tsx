import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionTitle } from "./SectionTitle";

describe("SectionTitle", () => {
  it("renders the title text", () => {
    render(<SectionTitle title="Portfolio" />);
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe(
      "Portfolio"
    );
  });

  it("renders description when provided", () => {
    render(<SectionTitle title="Portfolio" description="My work" />);
    expect(screen.getByText("My work")).toBeDefined();
  });

  it("does not render description when not provided", () => {
    render(<SectionTitle title="Portfolio" />);
    expect(screen.queryByText("My work")).toBeNull();
  });

  it("renders label when provided", () => {
    render(<SectionTitle title="Portfolio" label="SECTION" />);
    expect(screen.getByText("SECTION")).toBeDefined();
  });

  it("does not render label when not provided", () => {
    render(<SectionTitle title="Portfolio" />);
    expect(screen.queryByText("SECTION")).toBeNull();
  });
});
