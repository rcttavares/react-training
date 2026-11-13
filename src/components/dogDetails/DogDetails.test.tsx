import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SnackbarProvider } from "notistack";
import DogDetails from "./DogDetails";
import { DogListStore } from "../../stores/dogList/DogListStore";
import { affenpinscher, basenji, setDogState } from "../../test-utils/dogs";

function renderDogDetails() {
  return render(
    <SnackbarProvider>
      <DogDetails />
    </SnackbarProvider>
  );
}

describe("DogDetails", () => {
  it("should show the selected breed", () => {
    setDogState({ dogItem: affenpinscher });
    renderDogDetails();

    expect(screen.getByRole("heading", { name: "Affenpinscher" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "affenpinscher" })).toHaveAttribute(
      "src",
      affenpinscher.image
    );
  });

  it("should disable the actions when no breed is selected", () => {
    setDogState();
    renderDogDetails();

    expect(screen.getByRole("heading", { name: "Name of breed" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Scold!" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Bark!" })).toBeDisabled();
  });

  it("should increase the scolded counter of the selected breed only", async () => {
    const user = userEvent.setup();
    setDogState({ dogItem: affenpinscher });
    renderDogDetails();

    await user.click(screen.getByRole("button", { name: "Scold!" }));

    expect(DogListStore.getState().dogList).toEqual([
      { ...affenpinscher, scolded: 1 },
      basenji,
    ]);
  });

  it("should show a snackbar when barking", async () => {
    const user = userEvent.setup();
    setDogState({ dogItem: affenpinscher });
    renderDogDetails();

    await user.click(screen.getByRole("button", { name: "Bark!" }));

    expect(await screen.findByText("Woof! Woof!")).toBeInTheDocument();
  });
});
