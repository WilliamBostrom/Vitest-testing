import { render, screen } from "@testing-library/react";
import Button from "./components/Button";

it("should have hello world", () => {
  render(<Button />);
  const msg = screen.queryByText(/Hello World/i);
  // expect(msg).toBeVisible();
  expect(msg).toHaveTextContent("Hello World!");
  // expect(msg).toContainHTML("<button>Hello World!</button>");
});
