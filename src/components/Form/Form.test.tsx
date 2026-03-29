import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

const mockSendContactMail = vi.fn();

vi.mock("@services/LocalApiService", () => ({
  LocalApiService: {
    sendContactMail: (...args: any[]) => mockSendContactMail(...args),
  },
}));

const mockToast = vi.fn();
vi.mock("react-toastify", () => ({
  toast: (...args: any[]) => mockToast(...args),
}));

vi.mock("next/router", () => ({
  useRouter: vi.fn(() => ({
    pathname: "/",
    events: { on: vi.fn(), off: vi.fn() },
  })),
}));

describe("Form", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSendContactMail.mockResolvedValue(undefined);
  });

  it("renders the name input", () => {
    render(<Form />);
    expect(screen.getByPlaceholderText("Name and/or Company")).toBeDefined();
  });

  it("renders the email input", () => {
    render(<Form />);
    expect(screen.getByPlaceholderText("your@email.com")).toBeDefined();
  });

  it("renders the message textarea", () => {
    render(<Form />);
    expect(
      screen.getByPlaceholderText("Tell me about your project...")
    ).toBeDefined();
  });

  it("renders the send button", () => {
    render(<Form />);
    expect(screen.getByText("Send Message")).toBeDefined();
  });

  it("renders labels for inputs", () => {
    render(<Form />);
    expect(screen.getByLabelText("Name")).toBeDefined();
    expect(screen.getByLabelText("Email")).toBeDefined();
    expect(screen.getByLabelText("Message")).toBeDefined();
  });

  it("shows error toast when submitting with empty name", async () => {
    render(<Form />);
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalled();
    });
  });

  it("shows error toast when submitting with invalid email", async () => {
    const user = userEvent.setup();
    render(<Form />);

    await user.type(
      screen.getByPlaceholderText("Name and/or Company"),
      "John"
    );
    await user.clear(screen.getByPlaceholderText("your@email.com"));
    await user.type(
      screen.getByPlaceholderText("your@email.com"),
      "not-an-email"
    );
    fireEvent.submit(screen.getByText("Send Message").closest("form")!);

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalled();
    });
  });

  it("shows error toast when message is too short", async () => {
    const user = userEvent.setup();
    render(<Form />);

    await user.type(
      screen.getByPlaceholderText("Name and/or Company"),
      "John"
    );
    await user.type(
      screen.getByPlaceholderText("your@email.com"),
      "john@example.com"
    );
    await user.type(
      screen.getByPlaceholderText("Tell me about your project..."),
      "Short"
    );
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalled();
    });
  });

  it("calls LocalApiService.sendContactMail on valid submission", async () => {
    const user = userEvent.setup();
    render(<Form />);

    await user.type(
      screen.getByPlaceholderText("Name and/or Company"),
      "John Doe"
    );
    await user.type(
      screen.getByPlaceholderText("your@email.com"),
      "john@example.com"
    );
    await user.type(
      screen.getByPlaceholderText("Tell me about your project..."),
      "Hello, this is a valid message that is long enough."
    );
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(mockSendContactMail).toHaveBeenCalledWith({
        senderName: "John Doe",
        senderEmail: "john@example.com",
        senderMessage:
          "Hello, this is a valid message that is long enough.",
      });
    });
  });

  it("shows success toast after successful submission", async () => {
    const user = userEvent.setup();
    render(<Form />);

    await user.type(
      screen.getByPlaceholderText("Name and/or Company"),
      "John Doe"
    );
    await user.type(
      screen.getByPlaceholderText("your@email.com"),
      "john@example.com"
    );
    await user.type(
      screen.getByPlaceholderText("Tell me about your project..."),
      "Hello, this is a valid message that is long enough."
    );
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalled();
      expect(mockSendContactMail).toHaveBeenCalled();
    });
  });

  it("shows error toast when API call fails", async () => {
    mockSendContactMail.mockRejectedValue(new Error("Network error"));
    const user = userEvent.setup();
    render(<Form />);

    await user.type(
      screen.getByPlaceholderText("Name and/or Company"),
      "John Doe"
    );
    await user.type(
      screen.getByPlaceholderText("your@email.com"),
      "john@example.com"
    );
    await user.type(
      screen.getByPlaceholderText("Tell me about your project..."),
      "Hello, this is a valid message that is long enough."
    );
    fireEvent.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalled();
    });
  });
});
