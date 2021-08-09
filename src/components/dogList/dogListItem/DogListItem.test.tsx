import { shallow } from "enzyme";
import DogListItem from "./DogListItem";
import DogListItemView from "./DogListItemView";

describe("DogListItem", () => {
  const name = "affenpinscher";
  const image = "image url";
  const scolded = 0;
  const selected = false;
  const onClickMock = jest.fn();

  it("should render the view with the right props", () => {
    const wrapper = shallow(
      <DogListItem
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onClick={onClickMock}
      />
    );

    expect(wrapper.type()).toBe(DogListItemView);
  });
});
