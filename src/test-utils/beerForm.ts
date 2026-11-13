import { screen } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";

export const getBeerName = () => screen.getByLabelText("Beer name");
export const getIngredients = () => screen.getByLabelText("Ingredients");
export const getHasCorn = () => screen.getByRole("checkbox", { name: "Has corn" });
export const getBeerType = () => screen.getByRole("combobox", { name: "Beer type" });
export const getSubmit = () => screen.getByRole("button", { name: "Submit" });

export async function selectBeerType(user: UserEvent, option: string) {
  await user.click(getBeerType());
  await user.click(screen.getByRole("option", { name: option }));
}

export async function fillBeerForm(user: UserEvent) {
  await user.type(getBeerName(), "Colorado");
  await selectBeerType(user, "Ale");
  await user.click(getHasCorn());
  await user.type(getIngredients(), "Malt and hops");
}

export function expectEmptyBeerForm() {
  expect(getBeerName()).toHaveValue("");
  expect(getBeerType()).not.toHaveTextContent(/\w/);
  expect(getHasCorn()).not.toBeChecked();
  expect(getIngredients()).toHaveValue("");
}

export const filledBeerForm = {
  beerName: "Colorado",
  beerType: "Ale",
  hasCorn: true,
  ingredients: "Malt and hops",
};
