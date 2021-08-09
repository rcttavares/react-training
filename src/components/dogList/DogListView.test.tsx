import { shallow } from "enzyme";
import DogListView from "./DogListView";
import { useStyles } from "./DogListView.styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import DogListItem from "./dogListItem/DogListItem";
import { IDog } from "../../types/Types";

jest.mock("./DogListView.styles");

describe("DogListView", () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      paper: "paper",
      list: "list",
    });
  });

  const dogList: IDog[] = [{ name: "", image: "", scolded: 0 }];
  const dogItem: IDog = { name: "", image: "", scolded: 0 };
  const onSelectMock = jest.fn((f) => f);

  it("should render correctly", () => {
    const wrapper = shallow(
      <DogListView
        dogList={dogList}
        dogItem={dogItem}
        onSelect={onSelectMock}
      />
    );

    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          {dogList.map((item, index) => {
            return (
              <List key={index} className="list">
                <DogListItem
                  name={item.name}
                  image={item.image}
                  scolded={item.scolded}
                  selected={item.name === dogItem.name}
                  onClick={onSelectMock(item)}
                />
              </List>
            );
          })}
        </Paper>
      )
    ).toBe(true);
  });

  it("should call the onClick of DogListItem", () => {
    const wrapper = shallow(
      <DogListView
        dogList={dogList}
        dogItem={dogItem}
        onSelect={onSelectMock}
      />
    );

    wrapper.find(DogListItem).first().invoke("onClick")();
    expect(onSelectMock).toHaveBeenCalled();
  });
});
