import { shallow } from "enzyme";
import DogListView from "./DogListView";
import { useStyles } from "./DogListView.styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DogListItem from "./dogListItem/DogListItem";
import { IDog } from "../../types/Types";

jest.mock("./DogListView.styles");

describe("DogListView", () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      box: "box",
      list: "list",
      paper: "paper",
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
                  key={index}
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

  it("should return empty list if not have breed", () => {
    const dogListEmpty: IDog[] = [];

    const wrapper = shallow(
      <DogListView
        dogList={dogListEmpty}
        dogItem={dogItem}
        onSelect={onSelectMock}
      />
    );

    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          {dogListEmpty.length <= 0 ? (
            <Box className="box">
              <Typography variant="h6" component="h2">
                There is no such initial letter,{" "}
                <b>please select another breed</b>.
              </Typography>
            </Box>
          ) : (
            <></>
          )}
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
