import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectItem } from "./ProjectItem";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

describe("ProjectItem", () => {
  const defaultProps = {
    title: "Portfolio Site",
    type: "Frontend" as const,
    imgUrl: "/images/portfolio.png",
    slug: "portfolio-site",
  };

  it("renders the title", () => {
    render(<ProjectItem {...defaultProps} />);
    expect(screen.getByText("Portfolio Site")).toBeDefined();
  });

  it("renders the project type", () => {
    render(<ProjectItem {...defaultProps} />);
    expect(screen.getByText("Frontend")).toBeDefined();
  });

  it("links to the correct slug URL", () => {
    render(<ProjectItem {...defaultProps} />);
    const link = screen.getByText("Portfolio Site").closest("a");
    expect(link?.getAttribute("href")).toBe("/projects/portfolio-site");
  });

  it("renders the cover image", () => {
    render(<ProjectItem {...defaultProps} />);
    const img = screen.getByAltText("Portfolio Site") as HTMLImageElement;
    expect(img.getAttribute("src")).toBe("/images/portfolio.png");
  });
});
