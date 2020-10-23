import React from "react";
import { render } from "@testing-library/react";
import ColorWheel from "./ColorWheel";

it("has a ColorWheel component", () => {
  const { getByText } = render(<ColorWheel />);
  expect(getByText("ColorWheel")).toBeInTheDocument();
});
