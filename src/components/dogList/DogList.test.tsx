import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DogList from "./DogList";
import { DogItemStore } from "../../stores/dogItem/DogItemStore";
import { basenji, setDogState } from "../../test-utils/dogs";

describe("DogList", () => {
  it("should render every breed when there is no filter", () => {
    setDogState();
    render(<DogList />);

    expect(screen.getByText("Affenpinscher")).toBeInTheDocument();
    expect(screen.getByText("Basenji")).toBeInTheDocument();
  });

  it("should render only the breeds starting with the selected letter", () => {
    setDogState({ dogFilter: "B" });
    render(<DogList />);

    expect(screen.queryByText("Affenpinscher")).not.toBeInTheDocument();
    expect(screen.getByText("Basenji")).toBeInTheDocument();
  });

  it("should select a breed when it is clicked", async () => {
    const user = userEvent.setup();
    setDogState();
    render(<DogList />);

    await user.click(screen.getByText("Basenji"));

    expect(DogItemStore.getState().dogItem).toEqual(basenji);
  });
});
