import { screen } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event";

// MUI v4 TextFields have no id, so their labels are not linked to the inputs.
// Fields are located by their `name` attribute instead.
export function getField(container: HTMLElement, name: string) {
  const field = container.querySelector<HTMLInputElement | HTMLTextAreaElement>(
    `[name="${name}"]`
  );
  if (!field) throw new Error(`Field "${name}" not found`);
  return field;
}

export async function selectBeerType(
  user: UserEvent,
  container: HTMLElement,
  option: string
) {
  const trigger = container.querySelector<HTMLElement>(
    '[aria-haspopup="listbox"]'
  );
  if (!trigger) throw new Error("Beer type select not found");

  await user.click(trigger);
  await user.click(screen.getByRole("option", { name: option }));
}

export async function fillBeerForm(user: UserEvent, container: HTMLElement) {
  await user.type(getField(container, "beerName"), "Colorado");
  await selectBeerType(user, container, "Ale");
  await user.click(screen.getByRole("checkbox", { name: "Has corn" }));
  await user.type(getField(container, "ingredients"), "Malt and hops");
}

export const filledBeerForm = {
  beerName: "Colorado",
  beerType: "Ale",
  hasCorn: true,
  ingredients: "Malt and hops",
};
