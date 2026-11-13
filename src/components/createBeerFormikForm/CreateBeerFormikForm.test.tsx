import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateBeerFormikForm from "./CreateBeerFormikForm";
import { fillBeerForm, filledBeerForm, getField } from "../../test-utils/beerForm";

describe("CreateBeerFormikForm", () => {
  it("should start empty with the submit button disabled", () => {
    const { container } = render(<CreateBeerFormikForm />);

    expect(getField(container, "beerName")).toHaveValue("");
    expect(getField(container, "beerType")).toHaveValue("");
    expect(getField(container, "ingredients")).toHaveValue("");
    expect(screen.getByRole("checkbox", { name: "Has corn" })).not.toBeChecked();
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  it("should log the values and reset the form on submit", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const { container } = render(<CreateBeerFormikForm />);

    await fillBeerForm(user, container);
    await user.click(await screen.findByRole("button", { name: "Submit" }));

    await waitFor(() => expect(logSpy).toHaveBeenCalledWith(filledBeerForm));
    await waitFor(() => expect(getField(container, "beerName")).toHaveValue(""));
    expect(screen.getByRole("checkbox", { name: "Has corn" })).not.toBeChecked();

    logSpy.mockRestore();
  });
});
