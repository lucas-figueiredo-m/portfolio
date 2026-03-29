import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NavigationLink } from "./NavigationLink";

const mockUseRouter = vi.fn(() => ({
  pathname: "/",
  events: { on: vi.fn(), off: vi.fn() },
}));

vi.mock("next/router", () => ({
  useRouter: () => mockUseRouter(),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("NavigationLink", () => {
  it("renders the label text", () => {
    render(<NavigationLink url="/about" label="About" />);
    expect(screen.getByText("About")).toBeDefined();
  });

  it("applies active styles when pathname matches the url", () => {
    mockUseRouter.mockReturnValue({
      pathname: "/about",
      events: { on: vi.fn(), off: vi.fn() },
    });

    render(<NavigationLink url="/about" label="About" />);
    const link = screen.getByText("About");
    expect(link.className).toContain("text-text-primary");
  });

  it("applies inactive styles when pathname does not match", () => {
    mockUseRouter.mockReturnValue({
      pathname: "/contact",
      events: { on: vi.fn(), off: vi.fn() },
    });

    render(<NavigationLink url="/about" label="About" />);
    const link = screen.getByText("About");
    expect(link.className).toContain("text-text-secondary");
  });

  it("uses includes matching when includes prop is true", () => {
    mockUseRouter.mockReturnValue({
      pathname: "/about/details",
      events: { on: vi.fn(), off: vi.fn() },
    });

    render(<NavigationLink url="/about" label="About" includes />);
    const link = screen.getByText("About");
    expect(link.className).toContain("text-text-primary");
  });

  it("does not match with includes=false on partial pathname", () => {
    mockUseRouter.mockReturnValue({
      pathname: "/about/details",
      events: { on: vi.fn(), off: vi.fn() },
    });

    render(<NavigationLink url="/about" label="About" />);
    const link = screen.getByText("About");
    expect(link.className).toContain("text-text-secondary");
  });
});
