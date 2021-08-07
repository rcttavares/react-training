import { shallow } from "enzyme";
import DogListItemView from "./DogListItemView";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { capitalize } from "lodash";

describe("DogListItemView", () => {
  const name = "affenpinscher";
  const image = "image url";
  const scolded = 0;
  const selected = false;
  const onClickMock = jest.fn();

  it("should render correctly", () => {
    const wrapper = shallow(
      <DogListItemView
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onClick={onClickMock}
      />
    );

    expect(
      wrapper.matchesElement(
        <ListItem button selected={selected}>
          <ListItemAvatar>
            <Avatar alt={name} src={image} />
          </ListItemAvatar>
          <ListItemText primary={capitalize(name)} />
          <ListItemSecondaryAction>
            <Chip label={scolded} />
          </ListItemSecondaryAction>
        </ListItem>
      )
    ).toBe(true);
  });

  it("should handle the onClick event", () => {
    const wrapper = shallow(
      <DogListItemView
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onClick={onClickMock}
      />
    );

    wrapper.find(ListItem).first().simulate("click");
    expect(onClickMock).toHaveBeenCalled();
  });
});
