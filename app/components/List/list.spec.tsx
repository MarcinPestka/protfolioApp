import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TitleComponent from "../Title/LeftSectionTitle";
import List from "./List";
import * as ScrollTo from "./listService";
describe("List component works correctly", async () => {
  const listComponent = render(<List />);
  render(<TitleComponent title="Education" id="education-element" />);

  it.each([
    { testId: "about-me", text: "About me" },
    { testId: "experience", text: "Experience" },
    { testId: "education", text: "Education" },
    { testId: "projects", text: "Projects" },
  ])("List render correctly", async (testValue) => {
    const element = await listComponent.findAllByTestId(testValue.testId);
    expect(element.length).toBe(1);
    expect(element[0].textContent).toBe(testValue.text);
  });

  it("scrolls element into view", async () => {
    window.HTMLElement.prototype.scrollIntoView = function () {};
    const methodNameFake = vi.spyOn(ScrollTo, "scrollTo");
    ScrollTo.scrollTo("education-element");
    expect(methodNameFake).toHaveBeenCalledWith("education-element");
  });
});
