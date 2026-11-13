import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("should render the label and call onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClickMock = vi.fn();

    render(<Button label="Label" onClick={onClickMock} />);
    await user.click(screen.getByRole("button", { name: "Label" }));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    render(<Button label="Label" disabled />);

    expect(screen.getByRole("button", { name: "Label" })).toBeDisabled();
  });
});
