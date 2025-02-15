import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectCard from "./ProjectCard";
describe("Project card component works correctly", async () => {
  const careerComponent = render(
    <ProjectCard
      title="Title of a project"
      description="Description of a project"
    />
  );

  it.each([
    { testId: "project-title", text: "Title of a project" },
    { testId: "project-description", text: "Description of a project" },
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
