import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMediaQuery } from "./index";

function createMatchMedia(matches: boolean) {
  const listeners: Array<(event: MediaQueryListEvent) => void> = [];

  const mql = {
    matches,
    addEventListener: vi.fn((event: string, cb: (event: MediaQueryListEvent) => void) => {
      listeners.push(cb);
    }),
    removeEventListener: vi.fn((event: string, cb: (event: MediaQueryListEvent) => void) => {
      const idx = listeners.indexOf(cb);
      if (idx !== -1) listeners.splice(idx, 1);
    }),
  };

  const trigger = (newMatches: boolean) => {
    mql.matches = newMatches;
    listeners.forEach((cb) => cb({ matches: newMatches } as MediaQueryListEvent));
  };

  return { mql, trigger };
}

describe("useMediaQuery", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns false when window width is above the breakpoint", () => {
    const { mql } = createMatchMedia(false);
    vi.stubGlobal("matchMedia", vi.fn(() => mql));

    const { result } = renderHook(() => useMediaQuery(768));

    expect(result.current).toBe(false);
    expect(window.matchMedia).toHaveBeenCalledWith("(max-width: 768px)");
  });

  it("returns true when window width is below the breakpoint", () => {
    const { mql } = createMatchMedia(true);
    vi.stubGlobal("matchMedia", vi.fn(() => mql));

    const { result } = renderHook(() => useMediaQuery(768));

    expect(result.current).toBe(true);
  });

  it("responds to media query changes", () => {
    const { mql, trigger } = createMatchMedia(false);
    vi.stubGlobal("matchMedia", vi.fn(() => mql));

    const { result } = renderHook(() => useMediaQuery(768));

    expect(result.current).toBe(false);

    act(() => {
      trigger(true);
    });

    expect(result.current).toBe(true);
  });

  it("removes the event listener on unmount", () => {
    const { mql } = createMatchMedia(false);
    vi.stubGlobal("matchMedia", vi.fn(() => mql));

    const { unmount } = renderHook(() => useMediaQuery(768));
    unmount();

    expect(mql.removeEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  });
});
