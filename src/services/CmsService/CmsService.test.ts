import { describe, it, expect } from "vitest";
import { CmsService } from "./CmsService";
import { experiences } from "@data/experiences";
import { works } from "@data/works";
import { projects } from "@data/projects";

describe("CmsService", () => {
  describe("getAllExperiences", () => {
    it("returns all experiences from local data", async () => {
      const result = await CmsService.getAllExperiences();
      expect(result).toEqual(experiences);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("getAllWorks", () => {
    it("returns all works from local data", async () => {
      const result = await CmsService.getAllWorks();
      expect(result).toEqual(works);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("getUniqueWork", () => {
    it("returns the correct work by slug", async () => {
      const result = await CmsService.getUniqueWork("jobble");
      expect(result.company).toBe("Jobble Inc");
      expect(result.slug).toBe("jobble");
    });

    it("throws for unknown slug", async () => {
      await expect(CmsService.getUniqueWork("nonexistent")).rejects.toThrow(
        "Work not found: nonexistent"
      );
    });
  });

  describe("getAllProjects", () => {
    it("returns all projects from local data", async () => {
      const result = await CmsService.getAllProjects();
      expect(result).toEqual(projects);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("getUniqueProject", () => {
    it("returns the correct project by slug", async () => {
      const result = await CmsService.getUniqueProject("swift-pokedex");
      expect(result.title).toBe("Swift Pokédex");
      expect(result.slug).toBe("swift-pokedex");
    });

    it("throws for unknown slug", async () => {
      await expect(
        CmsService.getUniqueProject("nonexistent")
      ).rejects.toThrow("Project not found: nonexistent");
    });
  });
});
