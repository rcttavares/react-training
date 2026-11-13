import { render, screen } from "@testing-library/react";
import { SnackbarProvider } from "notistack";
import App from "./App";

vi.mock("./stores/dogList/DogListEffect");

describe("App", () => {
  it("should render the dog section and both beer forms", () => {
    render(
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    );

    expect(screen.getByRole("radiogroup", { name: "dogLetter" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Beer Form" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Beer Formik" })).toBeInTheDocument();
  });
});
