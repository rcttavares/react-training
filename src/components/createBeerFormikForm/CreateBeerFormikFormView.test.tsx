import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateBeerFormikFormView from "./CreateBeerFormikFormView";
import {
  fillBeerForm,
  filledBeerForm,
  getBeerName,
  getHasCorn,
  getSubmit,
} from "../../test-utils/beerForm";
import { IBeerFormik } from "../../types/Types";

const initialValues: IBeerFormik = {
  beerName: "",
  beerType: "",
  hasCorn: false,
  ingredients: "",
};

describe("CreateBeerFormikFormView", () => {
  it("should render the title and the initial values", () => {
    render(
      <CreateBeerFormikFormView
        initialValues={{ ...initialValues, beerName: "Colorado", hasCorn: true }}
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByRole("heading", { name: "Beer Formik" })).toBeInTheDocument();
    expect(getBeerName()).toHaveValue("Colorado");
    expect(getHasCorn()).toBeChecked();
  });

  it("should keep the submit button disabled while the form is pristine", () => {
    render(<CreateBeerFormikFormView initialValues={initialValues} onSubmit={vi.fn()} />);

    expect(getSubmit()).toBeDisabled();
  });

  it("should show a validation error when a required field is cleared", async () => {
    const user = userEvent.setup();
    render(<CreateBeerFormikFormView initialValues={initialValues} onSubmit={vi.fn()} />);

    await user.type(getBeerName(), "a");
    await user.clear(getBeerName());

    expect(await screen.findByText("beerName is a required field")).toBeInTheDocument();
  });

  it("should call onSubmit with the filled values", async () => {
    const user = userEvent.setup();
    const onSubmitMock = vi.fn();
    render(
      <CreateBeerFormikFormView initialValues={initialValues} onSubmit={onSubmitMock} />
    );

    await fillBeerForm(user);
    await waitFor(() => expect(getSubmit()).toBeEnabled());
    await user.click(getSubmit());

    await waitFor(() =>
      expect(onSubmitMock).toHaveBeenCalledWith(filledBeerForm, expect.anything())
    );
  });
});
