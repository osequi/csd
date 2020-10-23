import React from "react";
import { render } from "@testing-library/react";
import CSD from "./CSD";

it("has a CSD component", () => {
  const { getByText } = render(<CSD />);
  expect(getByText("CSD")).toBeInTheDocument();
});
