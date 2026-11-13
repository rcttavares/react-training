import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DogListItem from "./DogListItem";

describe("DogListItem", () => {
  it("should render the breed and call onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClickMock = vi.fn();
    render(
      <DogListItem
        name="affenpinscher"
        image="image url"
        scolded={2}
        selected={false}
        onClick={onClickMock}
      />
    );

    await user.click(screen.getByRole("button", { name: /Affenpinscher/ }));

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
