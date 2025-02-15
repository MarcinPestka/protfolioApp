import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Career from "./Career";
describe("Career component works correctly", async () => {
  const description = ["Description 1", "Description 2", "Description 3"];
  const careerComponent = render(
    <Career
      title="Career"
      id="Career"
      points={[
        {
          position: "Position",
          span: "January 2024 - December 2024",
          company: "Company",
          description: description,
        },
        {
          position: "Position",
          span: "January 2024 - December 2024",
          company: "Company",
          description: description,
        },
      ]}
    />
  );

  it.each([{ testId: "left-title-component", text: "Career" }])(
    "Renders all test values correctly",
    async (testValue) => {
      const element = await careerComponent.findAllByTestId(testValue.testId);
      expect(element.length).toBe(1);
      expect(element[0].textContent).toBe(testValue.text);
    }
  );

  it("Renders career items correctly", async () => {
    const elements = await careerComponent.findAllByTestId(
      "career-item-test-id"
    );
    expect(elements.length).toBe(2);
  });
});
