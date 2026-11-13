import { act, render, screen } from "@testing-library/react";
import { SnackbarProvider } from "notistack";
import DogWrapper from "./DogWrapper";
import { DogListEffect } from "../../stores/dogList/DogListEffect";
import { LoaderEvent } from "../../stores/loader/LoaderEvent";
import { setDogState } from "../../test-utils/dogs";

vi.mock("../../stores/dogList/DogListEffect");

function renderDogWrapper() {
  return render(
    <SnackbarProvider>
      <DogWrapper />
    </SnackbarProvider>
  );
}

describe("DogWrapper", () => {
  beforeEach(() => {
    setDogState();
  });

  it("should load the breeds once on mount", () => {
    renderDogWrapper();

    expect(DogListEffect).toHaveBeenCalledTimes(1);
  });

  it("should replace the list with a skeleton while loading", () => {
    const { container } = renderDogWrapper();
    expect(screen.getByRole("list")).toBeInTheDocument();

    act(() => {
      LoaderEvent({ isLoading: true });
    });

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(container.querySelector(".MuiSkeleton-root")).toBeInTheDocument();
  });
});
