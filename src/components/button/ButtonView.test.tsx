import { shallow } from "enzyme";
import ButtonView from "./ButtonView";
import Button from "@material-ui/core/Button";

describe("ButtonView", () => {
  const label = "Label";
  const onClickMock = jest.fn();
  const disabled = false;

  it("should render correctly", () => {
    const wrapper = shallow(
      <ButtonView label={label} onClick={onClickMock} disabled={disabled} />
    );

    expect(
      wrapper.matchesElement(
        <Button
          onClick={onClickMock}
          disabled={disabled}
          type="submit"
          variant="contained"
          color="primary"
        >
          {label}
        </Button>
      )
    ).toBe(true);
  });

  it("should call a function onClick", () => {
    const wrapper = shallow(
      <ButtonView label={label} onClick={onClickMock} disabled={disabled} />
    );

    wrapper.find(Button).simulate("click");
    expect(onClickMock.mock.calls.length).toEqual(1);
  });
});
