import { render, screen } from "@testing-library/react";
import { SnackbarProvider } from "notistack";
import DogWrapperView from "./DogWrapperView";
import { setDogState } from "../../test-utils/dogs";

function renderView(isLoading: boolean) {
  return render(
    <SnackbarProvider>
      <DogWrapperView isLoading={isLoading} />
    </SnackbarProvider>
  );
}

describe("DogWrapperView", () => {
  beforeEach(() => {
    setDogState();
  });

  it("should render the filter, the details and the list when not loading", () => {
    const { container } = renderView(false);

    expect(screen.getByRole("radiogroup", { name: "dogLetter" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Name of breed" })).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(container.querySelector(".MuiSkeleton-root")).not.toBeInTheDocument();
  });

  it("should render a skeleton instead of the list when loading", () => {
    const { container } = renderView(true);

    expect(screen.getByRole("radiogroup", { name: "dogLetter" })).toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(container.querySelector(".MuiSkeleton-root")).toBeInTheDocument();
  });
});
