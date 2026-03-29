import { describe, it, expect, vi, beforeEach } from "vitest";

const {
  mockGetAllExperiences,
  mockGetAllWorks,
  mockGetUniqueWork,
  mockGetAllProjects,
  mockGetUniqueProject,
} = vi.hoisted(() => ({
  mockGetAllExperiences: vi.fn(),
  mockGetAllWorks: vi.fn(),
  mockGetUniqueWork: vi.fn(),
  mockGetAllProjects: vi.fn(),
  mockGetUniqueProject: vi.fn(),
}));

vi.mock("@services/DatoCmsService", () => ({
  DatoCmsService: {
    getAllExperiences: mockGetAllExperiences,
    getAllWorks: mockGetAllWorks,
    getUniqueWork: mockGetUniqueWork,
    getAllProjects: mockGetAllProjects,
    getUniqueProject: mockGetUniqueProject,
  },
  DatoCmsApi: undefined,
}));

import { CmsService } from "./CmsService";

describe("CmsService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getAllExperiences", () => {
    it("delegates to cms provider", async () => {
      const experiences = [{ id: 1, role: "Developer" }];
      mockGetAllExperiences.mockResolvedValue(experiences);

      const result = await CmsService.getAllExperiences();

      expect(mockGetAllExperiences).toHaveBeenCalled();
      expect(result).toEqual(experiences);
    });
  });

  describe("getAllWorks", () => {
    it("delegates to cms provider", async () => {
      const works = [{ id: 1, title: "Work A" }];
      mockGetAllWorks.mockResolvedValue(works);

      const result = await CmsService.getAllWorks();

      expect(mockGetAllWorks).toHaveBeenCalled();
      expect(result).toEqual(works);
    });
  });

  describe("getUniqueWork", () => {
    it("passes slug correctly to cms provider", async () => {
      const work = { id: 1, title: "Work A", slug: "work-a" };
      mockGetUniqueWork.mockResolvedValue(work);

      const result = await CmsService.getUniqueWork("work-a");

      expect(mockGetUniqueWork).toHaveBeenCalledWith("work-a");
      expect(result).toEqual(work);
    });
  });

  describe("getAllProjects", () => {
    it("delegates to cms provider", async () => {
      const projects = [{ id: 1, title: "Project A" }];
      mockGetAllProjects.mockResolvedValue(projects);

      const result = await CmsService.getAllProjects();

      expect(mockGetAllProjects).toHaveBeenCalled();
      expect(result).toEqual(projects);
    });
  });

  describe("getUniqueProject", () => {
    it("passes slug correctly to cms provider", async () => {
      const project = { id: 1, title: "Project A", slug: "project-a" };
      mockGetUniqueProject.mockResolvedValue(project);

      const result = await CmsService.getUniqueProject("project-a");

      expect(mockGetUniqueProject).toHaveBeenCalledWith("project-a");
      expect(result).toEqual(project);
    });
  });
});
