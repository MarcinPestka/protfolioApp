import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import List from "./List";

describe("List component works correctly", async () => {
  const listComponent = render(<List />);
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
    const scrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView();
    //comment back in when list for right element gets added
    // const element = await listComponent.findAllByTestId("education");
    // const methodNameFake = vi.spyOn(name, "scrollTo");
    // element[0].click();
    // expect(methodNameFake).toHaveBeenCalledWith("education-element");
    // expect(scrollIntoView).toHaveBeenCalledOnce();
  });
});
