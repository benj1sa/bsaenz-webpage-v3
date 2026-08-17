import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the newest post in the Latest Post feature", () => {
    render(<Home />);

    expect(screen.getByText("Latest Post")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "maybe software isn't the real jevons question",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("8/17/26")).toBeInTheDocument();
    expect(screen.getByRole("link", {
      name: /maybe software isn't the real jevons question/,
    })).toHaveAttribute("href", "/writing/maybe-software-isnt-the-real-jevons");
    expect(screen.getByRole("img", {
      name: "maybe software isn't the real jevons question",
    })).toHaveAttribute("src", "/images/maybe-software-isnt-the-real-jevons.png");
  });
});
