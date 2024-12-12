import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders initial setup message", async () => {
    render(<App />);
    const initialSetupParagraph = await screen.findByTestId("p-initial-setup");
    expect(initialSetupParagraph.textContent).toEqual("Initial setup done");
  });
});
