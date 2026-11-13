import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DogListItemView from "./DogListItemView";

describe("DogListItemView", () => {
  const name = "affenpinscher";
  const image = "image url";

  it("should render the avatar, the capitalized name and the scolded counter", () => {
    render(
      <DogListItemView
        name={name}
        image={image}
        scolded={5}
        selected={false}
        onClick={vi.fn()}
      />
    );

    expect(screen.getByRole("img", { name })).toHaveAttribute("src", image);
    expect(screen.getByText("Affenpinscher")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Affenpinscher/ })).not.toHaveClass(
      "Mui-selected"
    );
  });

  it("should be highlighted when selected", () => {
    render(
      <DogListItemView name={name} image={image} scolded={0} selected onClick={vi.fn()} />
    );

    expect(screen.getByRole("button", { name: /Affenpinscher/ })).toHaveClass("Mui-selected");
  });

  it("should call onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClickMock = vi.fn();
    render(
      <DogListItemView
        name={name}
        image={image}
        scolded={0}
        selected={false}
        onClick={onClickMock}
      />
    );

    await user.click(screen.getByRole("button", { name: /Affenpinscher/ }));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
