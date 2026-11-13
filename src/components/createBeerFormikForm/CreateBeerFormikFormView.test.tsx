import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateBeerFormikFormView from "./CreateBeerFormikFormView";
import { fillBeerForm, filledBeerForm, getField } from "../../test-utils/beerForm";
import { IBeerFormik } from "../../types/Types";

const initialValues: IBeerFormik = {
  beerName: "",
  beerType: "",
  hasCorn: false,
  ingredients: "",
};

describe("CreateBeerFormikFormView", () => {
  it("should render the title and the initial values", () => {
    const { container } = render(
      <CreateBeerFormikFormView
        initialValues={{ ...initialValues, beerName: "Colorado", hasCorn: true }}
        onSubmit={vi.fn()}
      />
    );

    expect(screen.getByRole("heading", { name: "Beer Formik" })).toBeInTheDocument();
    expect(getField(container, "beerName")).toHaveValue("Colorado");
    expect(screen.getByRole("checkbox", { name: "Has corn" })).toBeChecked();
  });

  it("should keep the submit button disabled while the form is pristine", () => {
    render(<CreateBeerFormikFormView initialValues={initialValues} onSubmit={vi.fn()} />);

    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  it("should show a validation error when a required field is cleared", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <CreateBeerFormikFormView initialValues={initialValues} onSubmit={vi.fn()} />
    );

    await user.type(getField(container, "beerName"), "a");
    await user.clear(getField(container, "beerName"));

    expect(await screen.findByText("beerName is a required field")).toBeInTheDocument();
  });

  it("should call onSubmit with the filled values", async () => {
    const user = userEvent.setup();
    const onSubmitMock = vi.fn();
    const { container } = render(
      <CreateBeerFormikFormView initialValues={initialValues} onSubmit={onSubmitMock} />
    );

    await fillBeerForm(user, container);
    const submit = screen.getByRole("button", { name: "Submit" });
    await waitFor(() => expect(submit).toBeEnabled());
    await user.click(submit);

    await waitFor(() =>
      expect(onSubmitMock).toHaveBeenCalledWith(filledBeerForm, expect.anything())
    );
  });
});
