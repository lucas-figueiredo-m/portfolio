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
  it("renders a LinkedIn link", () => {
    const { container } = render(<Footer />);
    const linkedinLink = container.querySelector(
      'a[href="https://www.linkedin.com/in/lucas-figueiredo-m/"]'
    );
    expect(linkedinLink).not.toBeNull();
  });

  it("renders a GitHub link", () => {
    const { container } = render(<Footer />);
    const githubLink = container.querySelector(
      'a[href="https://github.com/lucas-figueiredo-m"]'
    );
    expect(githubLink).not.toBeNull();
  });

  it("renders a Back to top button", () => {
    render(<Footer />);
    const button = screen.getByRole("button", { name: /back to top/i });
    expect(button).toBeDefined();
  });
});
