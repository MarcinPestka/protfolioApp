import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CareerItem from "./CareerItem";
describe("Career item component works correctly", async () => {
  const description = ["Description 1", "Description 2", "Description 3"];
  const careerComponent = render(
    <CareerItem
      position="Position"
      span="January 2024 - December 2024"
      company="Company"
      description={description}
    />
  );

  it.each([
    { testId: "position-test-id", text: "Position" },
    { testId: "company-test-id", text: "Company |" },
    { testId: "span-test-id", text: "January 2024 - December 2024" },
  ])("Renders all test values correctly", async (testValue) => {
    const element = await careerComponent.findAllByTestId(testValue.testId);
    expect(element.length).toBe(1);
    expect(element[0].textContent).toBe(testValue.text);
  });

  it("Renders description correctly", async () => {
    const elements = await careerComponent.findAllByTestId(
      "description-point-test-id"
    );
    expect(elements.length).toBe(3);
    description.forEach((desc, index) => {
      expect(elements[index].textContent).toBe(desc);
    });
  });
});
