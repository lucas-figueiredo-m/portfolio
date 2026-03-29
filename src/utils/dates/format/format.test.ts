import { describe, it, expect } from "vitest";
import { dateFormat } from "./format";

describe("dateFormat", () => {
  describe("yearOnly", () => {
    it("returns the year from a date string", () => {
      expect(dateFormat.yearOnly("2023-06-15")).toBe("2023");
    });

    it("returns the year for the beginning of the year", () => {
      expect(dateFormat.yearOnly("2024-01-01T12:00:00")).toBe("2024");
    });

    it("returns the year for the end of the year", () => {
      expect(dateFormat.yearOnly("2022-12-31")).toBe("2022");
    });
  });

  describe("extendedMonthAndYear", () => {
    it("returns month abbreviation and year", () => {
      expect(dateFormat.extendedMonthAndYear("2023-06-15")).toBe("Jun/2023");
    });

    it("returns Jan for the beginning of the year", () => {
      expect(dateFormat.extendedMonthAndYear("2024-01-01T12:00:00")).toBe("Jan/2024");
    });

    it("returns Dec for the end of the year", () => {
      expect(dateFormat.extendedMonthAndYear("2022-12-31")).toBe("Dec/2022");
    });

    it("handles different months correctly", () => {
      expect(dateFormat.extendedMonthAndYear("2023-03-10")).toBe("Mar/2023");
      expect(dateFormat.extendedMonthAndYear("2023-09-20")).toBe("Sep/2023");
    });
  });
});
