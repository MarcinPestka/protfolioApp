import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TextComponent from "./Text";
describe("Text component works correctly", async () => {
  const textComponent = render(
    <TextComponent title="Title" text="a sample text" id="id" />
  );

  it.each([
    { testId: "left-title-component", text: "Title" },
    { testId: "paragraph", text: "a sample text" },
    { testId: "second-paragraph", text: "Currantly working at Navbue" },
  ])("Renders all text values correctly", async (testValue) => {
    const element = await textComponent.findAllByTestId(testValue.testId);
    expect(element.length).toBe(1);
    expect(element[0].textContent).toBe(testValue.text);
  });
});
