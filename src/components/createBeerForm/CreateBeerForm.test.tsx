import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateBeerForm from "./CreateBeerForm";
import {
  expectEmptyBeerForm,
  fillBeerForm,
  filledBeerForm,
  getHasCorn,
  getSubmit,
} from "../../test-utils/beerForm";

describe("CreateBeerForm", () => {
  it("should start empty with the submit button disabled", () => {
    render(<CreateBeerForm />);

    expectEmptyBeerForm();
    expect(getSubmit()).toBeDisabled();
  });

  it("should toggle hasCorn on every click", async () => {
    const user = userEvent.setup();
    render(<CreateBeerForm />);

    await user.click(getHasCorn());
    expect(getHasCorn()).toBeChecked();

    await user.click(getHasCorn());
    expect(getHasCorn()).not.toBeChecked();
  });

  it("should log the values and reset the form on submit", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<CreateBeerForm />);

    await fillBeerForm(user);
    await user.click(getSubmit());

    expect(logSpy).toHaveBeenCalledWith(filledBeerForm);
    expectEmptyBeerForm();

    logSpy.mockRestore();
  });
});
