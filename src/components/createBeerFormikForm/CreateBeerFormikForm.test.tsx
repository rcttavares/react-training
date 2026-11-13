import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateBeerFormikForm from "./CreateBeerFormikForm";
import {
  expectEmptyBeerForm,
  fillBeerForm,
  filledBeerForm,
  getSubmit,
} from "../../test-utils/beerForm";

describe("CreateBeerFormikForm", () => {
  it("should start empty with the submit button disabled", () => {
    render(<CreateBeerFormikForm />);

    expectEmptyBeerForm();
    expect(getSubmit()).toBeDisabled();
  });

  it("should log the values and reset the form on submit", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<CreateBeerFormikForm />);

    await fillBeerForm(user);
    await waitFor(() => expect(getSubmit()).toBeEnabled());
    await user.click(getSubmit());

    await waitFor(() => expect(logSpy).toHaveBeenCalledWith(filledBeerForm));
    await waitFor(() => expectEmptyBeerForm());

    logSpy.mockRestore();
  });
});
