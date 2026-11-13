import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateBeerForm from "./CreateBeerForm";
import { fillBeerForm, filledBeerForm, getField } from "../../test-utils/beerForm";

describe("CreateBeerForm", () => {
  it("should start empty with the submit button disabled", () => {
    const { container } = render(<CreateBeerForm />);

    expect(getField(container, "beerName")).toHaveValue("");
    expect(getField(container, "beerType")).toHaveValue("");
    expect(getField(container, "ingredients")).toHaveValue("");
    expect(screen.getByRole("checkbox", { name: "Has corn" })).not.toBeChecked();
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  it("should toggle hasCorn on every click", async () => {
    const user = userEvent.setup();
    render(<CreateBeerForm />);
    const checkbox = screen.getByRole("checkbox", { name: "Has corn" });

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("should log the values and reset the form on submit", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const { container } = render(<CreateBeerForm />);

    await fillBeerForm(user, container);
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(logSpy).toHaveBeenCalledWith(filledBeerForm);
    expect(getField(container, "beerName")).toHaveValue("");
    expect(screen.getByRole("checkbox", { name: "Has corn" })).not.toBeChecked();

    logSpy.mockRestore();
  });
});
