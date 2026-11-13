import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DogFilter from "./DogFilter";
import { DogFilterStore } from "../../stores/dogFilter/DogFilterStore";
import { setDogState } from "../../test-utils/dogs";

describe("DogFilter", () => {
  beforeEach(() => {
    setDogState();
  });

  it("should render one option per letter with the number of breeds", () => {
    render(<DogFilter />);

    expect(screen.getAllByRole("radio")).toHaveLength(26);
    expect(screen.getByRole("radio", { name: "A (1)" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "B (1)" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "C (0)" })).toBeInTheDocument();
  });

  it("should update the filter store when a letter is selected", async () => {
    const user = userEvent.setup();
    render(<DogFilter />);

    await user.click(screen.getByRole("radio", { name: "B (1)" }));

    expect(DogFilterStore.getState().dogFilter).toBe("b");
  });
});
