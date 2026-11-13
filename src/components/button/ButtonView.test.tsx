import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonView from "./ButtonView";

describe("ButtonView", () => {
  it("should render a submit button with the label", () => {
    render(<ButtonView label="Label" />);

    const button = screen.getByRole("button", { name: "Label" });
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toBeEnabled();
  });

  it("should call onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClickMock = vi.fn();

    render(<ButtonView label="Label" onClick={onClickMock} />);
    await user.click(screen.getByRole("button", { name: "Label" }));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<ButtonView label="Label" disabled />);

    expect(screen.getByRole("button", { name: "Label" })).toBeDisabled();
  });
});
