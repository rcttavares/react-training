import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { shallow } from "enzyme";
import { IDog } from "../../types/Types";
import DogListItem from "./dogListItem/DogListItem";
import DogListView from "./DogListView";
import { useStyles } from "./DogListView.styles";

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

    expect(wrapper.find(Paper).prop("className")).toBe("paper");
    expect(wrapper.find(List).prop("className")).toBe("list");
    expect(wrapper.find(DogListItem)).toHaveLength(dogList.length);
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
