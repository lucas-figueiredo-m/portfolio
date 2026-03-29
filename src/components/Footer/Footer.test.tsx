import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Footer", () => {
  it("renders a LinkedIn link with aria-label", () => {
    render(<Footer />);
    const linkedinLink = screen.getByLabelText("LinkedIn profile");
    expect(linkedinLink).toBeDefined();
    expect(linkedinLink.getAttribute("href")).toBe(
      "https://www.linkedin.com/in/lucas-figueiredo-m/"
    );
  });

  it("renders a GitHub link with aria-label", () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText("GitHub profile");
    expect(githubLink).toBeDefined();
    expect(githubLink.getAttribute("href")).toBe(
      "https://github.com/lucas-figueiredo-m"
    );
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/2026 Lucas Figueiredo/)).toBeDefined();
  });
});
