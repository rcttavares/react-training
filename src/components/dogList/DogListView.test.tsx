import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DogListView from "./DogListView";
import { affenpinscher, basenji, emptyDog } from "../../test-utils/dogs";

describe("DogListView", () => {
  it("should render one item per breed and mark the selected one", () => {
    render(
      <DogListView
        dogList={[affenpinscher, basenji]}
        dogItem={basenji}
        onSelect={vi.fn()}
      />
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByRole("button", { name: /Basenji/ })).toHaveClass("Mui-selected");
    expect(screen.getByRole("button", { name: /Affenpinscher/ })).not.toHaveClass(
      "Mui-selected"
    );
  });

  it("should render a message when the list is empty", () => {
    render(<DogListView dogList={[]} dogItem={emptyDog} onSelect={vi.fn()} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "There is no such initial letter, please select another breed.",
      })
    ).toBeInTheDocument();
  });

  it("should call onSelect with the clicked breed", async () => {
    const user = userEvent.setup();
    const onSelectMock = vi.fn();
    render(
      <DogListView
        dogList={[affenpinscher, basenji]}
        dogItem={emptyDog}
        onSelect={onSelectMock}
      />
    );

    await user.click(screen.getByRole("button", { name: /Affenpinscher/ }));

    expect(onSelectMock).toHaveBeenCalledWith(affenpinscher);
  });
});
