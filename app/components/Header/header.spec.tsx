import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header component works correctly", async () => {
  const headerComponent = render(<Header />);
  const name = await headerComponent.findAllByTestId("header-name");
  const list = await headerComponent.findAllByTestId("list-component");
  it("Name render correctly", async () => {
    expect(name.length).toBe(1);
    expect(name[0].textContent).toBe("Marcin Pestka");
  });
  it("List render correctly", async () => {
    expect(list.length).toBe(1);
  });
});
