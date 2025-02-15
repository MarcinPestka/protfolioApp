import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Projects from "./Projects";
describe("Projects component works correctly", async () => {
  const careerComponent = render(<Projects />);

  it.each([
    { testId: "left-title-component", text: "Projects" },
    { testId: "github-link", text: "Visit my github" },
  ])("Renders all text values correctly", async (testValue) => {
    const element = await careerComponent.findAllByTestId(testValue.testId);
    expect(element.length).toBe(1);
    expect(element[0].textContent).toBe(testValue.text);
  });

  it("Renders image container", async () => {
    const elements = await careerComponent.findAllByTestId(
      "project-image-container"
    );
    expect(elements.length).toBe(1);
  });
});
