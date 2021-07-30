import { shallow } from "enzyme";
import DogListItemView from "./DogListItemView";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Chip from "@material-ui/core/Chip";
import { capitalize } from "lodash";

describe("DogListItemView", () => {
  it("should render correctly", () => {
    const name = "Name";
    const image = "Image";
    const scolded = 0;
    const selected = false;
    const onSelectMock = jest.fn();

    const wrapper = shallow(
      <DogListItemView
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onSelect={onSelectMock}
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
    const name = "Name";
    const image = "Image";
    const scolded = 0;
    const selected = false;
    const onSelectMock = jest.fn();

    const wrapper = shallow(
      <DogListItemView
        name={name}
        image={image}
        scolded={scolded}
        selected={selected}
        onSelect={onSelectMock}
      />
    );

    wrapper.find(ListItem).first().simulate("click");
    expect(onSelectMock).toHaveBeenCalled();
  });
});
