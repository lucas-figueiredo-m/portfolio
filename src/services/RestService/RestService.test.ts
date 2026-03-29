import { describe, it, expect, vi, beforeEach } from "vitest";

const { mockGet, mockPost } = vi.hoisted(() => ({
  mockGet: vi.fn(),
  mockPost: vi.fn(),
}));

vi.mock("axios", () => ({
  default: {
    create: vi.fn(() => ({
      get: mockGet,
      post: mockPost,
    })),
  },
}));

import axios from "axios";
import { RestServiceClass, ServiceUrls } from "./index";

describe("RestServiceClass", () => {
  let service: RestServiceClass;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new RestServiceClass(ServiceUrls.local);
  });

  describe("get", () => {
    it("calls the correct URL and returns data", async () => {
      const mockData = { id: 1, name: "test" };
      mockGet.mockResolvedValue({ data: mockData });

      const result = await service.get("/test-path");

      expect(mockGet).toHaveBeenCalledWith("/test-path", undefined);
      expect(result).toEqual(mockData);
    });

    it("passes config params to axios", async () => {
      mockGet.mockResolvedValue({ data: "ok" });

      const conf = { params: { page: 1 } };
      await service.get("/items", conf);

      expect(mockGet).toHaveBeenCalledWith("/items", conf);
    });
  });

  describe("post", () => {
    it("sends correct body and returns data", async () => {
      const mockData = { success: true };
      const requestBody = { email: "test@test.com" };
      mockPost.mockResolvedValue({ data: mockData });

      const result = await service.post("/submit", requestBody);

      expect(mockPost).toHaveBeenCalledWith("/submit", requestBody, undefined);
      expect(result).toEqual(mockData);
    });

    it("passes config params to axios", async () => {
      mockPost.mockResolvedValue({ data: null });

      const conf = { params: { version: "2" } };
      await service.post("/data", { key: "value" }, conf);

      expect(mockPost).toHaveBeenCalledWith("/data", { key: "value" }, conf);
    });
  });

  describe("error propagation", () => {
    it("propagates get errors", async () => {
      mockGet.mockRejectedValue(new Error("Network Error"));

      await expect(service.get("/fail")).rejects.toThrow("Network Error");
    });

    it("propagates post errors", async () => {
      mockPost.mockRejectedValue(new Error("Server Error"));

      await expect(service.post("/fail", {})).rejects.toThrow("Server Error");
    });
  });

  describe("api instance", () => {
    it("creates axios instance with the provided base URL", async () => {
      mockGet.mockResolvedValue({ data: null });
      await service.get("/trigger");

      expect(axios.create).toHaveBeenCalledWith({
        baseURL: ServiceUrls.local,
      });
    });
  });
});
