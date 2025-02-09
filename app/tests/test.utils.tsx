import { render } from "@testing-library/react";

export function renderComponent(ui: React.ReactElement) {
  return render(ui);
}
