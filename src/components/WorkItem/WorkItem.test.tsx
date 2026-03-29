import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { WorkItem } from "./WorkItem";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} />,
}));

describe("WorkItem", () => {
  const defaultProps = {
    title: "My Project",
    type: "web app",
    slug: "my-project",
    imgUrl: "/images/project.png",
  };

  it("renders the title", () => {
    render(<WorkItem {...defaultProps} />);
    expect(screen.getByText("My Project")).toBeDefined();
  });

  it("renders the job type", () => {
    render(<WorkItem {...defaultProps} />);
    expect(screen.getByText("web app")).toBeDefined();
  });

  it("links to the correct slug URL", () => {
    render(<WorkItem {...defaultProps} />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/work/my-project");
  });

  it("encodes special characters in slug", () => {
    render(<WorkItem {...defaultProps} slug="my project & stuff" />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe(
      `/work/${encodeURIComponent("my project & stuff")}`
    );
  });

  it("renders the cover image", () => {
    render(<WorkItem {...defaultProps} />);
    const img = screen.getByAltText("My Project");
    expect(img).toBeDefined();
    expect(img.getAttribute("src")).toBe("/images/project.png");
  });
});
