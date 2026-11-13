import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DogFilterView from "./DogFilterView";

describe("DogFilterView", () => {
  const filter = ["a", "b", "c", "d"];

  it("should render one option per letter using getDogBreedLength", () => {
    const getDogBreedLengthMock = vi.fn(() => 3);
    render(
      <DogFilterView
        filter={filter}
        onChangeOption={vi.fn()}
        getDogBreedLength={getDogBreedLengthMock}
      />
    );

    expect(screen.getByRole("radiogroup", { name: "dogLetter" })).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(filter.length);
    expect(screen.getByRole("radio", { name: "A (3)" })).toHaveAttribute("value", "a");
    expect(getDogBreedLengthMock).toHaveBeenCalledWith("d");
  });

  it("should call onChangeOption when a letter is selected", async () => {
    const user = userEvent.setup();
    const onChangeOptionMock = vi.fn();
    render(
      <DogFilterView
        filter={filter}
        onChangeOption={onChangeOptionMock}
        getDogBreedLength={() => 0}
      />
    );

    await user.click(screen.getByRole("radio", { name: "C (0)" }));

    expect(onChangeOptionMock).toHaveBeenCalledTimes(1);
  });
});
