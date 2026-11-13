import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateBeerFormView from "./CreateBeerFormView";
import {
  getBeerName,
  getBeerType,
  getHasCorn,
  getIngredients,
  getSubmit,
  selectBeerType,
} from "../../test-utils/beerForm";
import { CreateBeerFormProps } from "./CreateBeerForm.types";

function renderView(props: Partial<CreateBeerFormProps> = {}) {
  const handlers = {
    onChangeInput: vi.fn(),
    onChangeCheckbox: vi.fn(),
    onSubmit: vi.fn((event) => event.preventDefault()),
  };

  const utils = render(
    <CreateBeerFormView
      beerName="Colorado"
      beerType="Ale"
      hasCorn={false}
      ingredients="Malt"
      {...handlers}
      {...props}
    />
  );

  return { ...utils, ...handlers };
}

describe("CreateBeerFormView", () => {
  it("should render the title and the given values", () => {
    renderView({ hasCorn: true });

    expect(screen.getByRole("heading", { name: "Beer Form" })).toBeInTheDocument();
    expect(getBeerName()).toHaveValue("Colorado");
    expect(getBeerType()).toHaveTextContent("Ale");
    expect(getIngredients()).toHaveValue("Malt");
    expect(getHasCorn()).toBeChecked();
    expect(getSubmit()).toBeEnabled();
  });

  it.each(["beerName", "beerType", "ingredients"] as const)(
    "should disable the submit button when %s is empty",
    (field) => {
      renderView({ [field]: "" });

      expect(getSubmit()).toBeDisabled();
    }
  );

  it("should call the handlers when the user interacts with the form", async () => {
    const user = userEvent.setup();
    const { container, onChangeInput, onChangeCheckbox, onSubmit } = renderView();

    await user.type(getBeerName(), "!");
    await selectBeerType(user, "Lager");
    await user.type(getIngredients(), "!");
    await user.click(getHasCorn());
    fireEvent.submit(container.querySelector("form")!);

    expect(onChangeInput).toHaveBeenCalledTimes(3);
    expect(onChangeCheckbox).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
