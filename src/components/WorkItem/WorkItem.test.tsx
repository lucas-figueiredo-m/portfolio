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

  it("renders the type with a dash prefix", () => {
    render(<WorkItem {...defaultProps} />);
    expect(screen.getByText("- web app")).toBeDefined();
  });

  it("renders a See more link", () => {
    render(<WorkItem {...defaultProps} />);
    expect(screen.getByText(/See more/)).toBeDefined();
  });

  it("links to the correct slug URL", () => {
    render(<WorkItem {...defaultProps} />);
    const link = screen.getByText(/See more/).closest("a");
    expect(link?.getAttribute("href")).toBe("/work/my-project");
  });

  it("encodes special characters in slug", () => {
    render(<WorkItem {...defaultProps} slug="my project & stuff" />);
    const link = screen.getByText(/See more/).closest("a");
    expect(link?.getAttribute("href")).toBe(
      `/work/${encodeURIComponent("my project & stuff")}`
    );
  });

  it("applies flex-row-reverse when isEven is true", () => {
    const { container } = render(<WorkItem {...defaultProps} isEven />);
    const section = container.querySelector("section");
    expect(section?.className).toContain("flex-row-reverse");
  });

  it("does not apply flex-row-reverse when isEven is false", () => {
    const { container } = render(<WorkItem {...defaultProps} />);
    const section = container.querySelector("section");
    expect(section?.className).not.toContain("flex-row-reverse");
  });
});
