import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DogDetailsView from "./DogDetailsView";

describe("DogDetailsView", () => {
  const image = "image url";

  it("should render the capitalized name and the image", () => {
    render(
      <DogDetailsView
        name="affenpinscher"
        image={image}
        onScold={vi.fn()}
        onBark={vi.fn()}
        disabled={false}
      />
    );

    expect(screen.getByRole("heading", { name: "Affenpinscher" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "affenpinscher" })).toHaveAttribute("src", image);
  });

  it('should render "Name of breed" when no breed is selected', () => {
    render(
      <DogDetailsView name="" image="" onScold={vi.fn()} onBark={vi.fn()} disabled />
    );

    expect(screen.getByRole("heading", { name: "Name of breed" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Scold!" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Bark!" })).toBeDisabled();
  });

  it("should call onScold and onBark when the buttons are clicked", async () => {
    const user = userEvent.setup();
    const onScoldMock = vi.fn();
    const onBarkMock = vi.fn();
    render(
      <DogDetailsView
        name="affenpinscher"
        image={image}
        onScold={onScoldMock}
        onBark={onBarkMock}
        disabled={false}
      />
    );

    await user.click(screen.getByRole("button", { name: "Scold!" }));
    await user.click(screen.getByRole("button", { name: "Bark!" }));

    expect(onScoldMock).toHaveBeenCalledTimes(1);
    expect(onBarkMock).toHaveBeenCalledTimes(1);
  });
});
