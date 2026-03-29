import { describe, it, expect, vi, beforeEach } from "vitest";

const { mockPost } = vi.hoisted(() => ({
  mockPost: vi.fn(),
}));

vi.mock("@services/RestService", () => ({
  RestServiceClass: function () {
    return { post: mockPost };
  },
  ServiceUrls: {
    github: "https://api.github.com",
    local: "/api",
  },
}));

import { LocalApiService } from "./LocalApiService";

describe("LocalApiService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("sendContactMail", () => {
    it("calls post with correct path and data", async () => {
      const mailData = {
        senderName: "John Doe",
        senderEmail: "john@example.com",
        senderMessage: "Hello there",
      };
      mockPost.mockResolvedValue(undefined);

      await LocalApiService.sendContactMail(mailData);

      expect(mockPost).toHaveBeenCalledWith("/contact", mailData);
    });

    it("returns the result from post", async () => {
      const mailData = {
        senderName: "Jane",
        senderEmail: "jane@example.com",
        senderMessage: "Hi",
      };
      mockPost.mockResolvedValue({ status: "sent" });

      const result = await LocalApiService.sendContactMail(mailData);

      expect(result).toEqual({ status: "sent" });
    });

    it("propagates errors from post", async () => {
      const mailData = {
        senderName: "Test",
        senderEmail: "test@test.com",
        senderMessage: "msg",
      };
      mockPost.mockRejectedValue(new Error("Failed to send"));

      await expect(LocalApiService.sendContactMail(mailData)).rejects.toThrow(
        "Failed to send"
      );
    });
  });
});
