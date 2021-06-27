import { shallow } from "enzyme";
import CreateBeerFormView from "./CreateBeerFormView";
import { useStyles } from "./CreateBeerFormView.styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../button/Button";
import { beerTypeList } from "../../mocks/BeerTypeMock";

jest.mock("./CreateBeerFormView.styles");

describe("CreateBeerFormView", () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      paper: "paper",
      typography: "typography",
      container: "container",
      button: "button",
    });
  });

  const beerName = "Beer name";
  const beerType = "Beer type";
  const hasCorn = false;
  const ingredients = "Ingredients";
  const onChangeInputMock = jest.fn();
  const onChangeCheckboxMock = jest.fn();
  const onSubmitMock = jest.fn();

  it("should render correctly", () => {
    const wrapper = shallow(
      <CreateBeerFormView
        beerName={beerName}
        beerType={beerType}
        hasCorn={hasCorn}
        ingredients={ingredients}
        onChangeInput={onChangeInputMock}
        onChangeCheckbox={onChangeCheckboxMock}
        onSubmit={onSubmitMock}
      />
    );

    expect(
      wrapper.matchesElement(
        <Paper className="paper">
          <Typography variant="h5" component="h1" className="typography">
            Beer Form
          </Typography>

          <form onSubmit={onSubmitMock}>
            <div className="container">
              <TextField
                label="Beer name"
                name="beerName"
                variant="outlined"
                fullWidth
                value={beerName}
                onChange={onChangeInputMock}
              />
            </div>

            <div className="container">
              <TextField
                select
                label="Beer type"
                name="beerType"
                variant="outlined"
                fullWidth
                value={beerType}
                onChange={onChangeInputMock}
              >
                {beerTypeList.map((item) => (
                  <MenuItem key={item.id} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="container">
              <FormControlLabel
                label="Has corn"
                control={
                  <Checkbox
                    color="primary"
                    name="hasCorn"
                    checked={hasCorn}
                    onChange={onChangeCheckboxMock}
                  />
                }
              />
            </div>

            <div className="container">
              <TextField
                label="Ingredients"
                name="ingredients"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={ingredients}
                onChange={onChangeInputMock}
              />
            </div>

            <div className="button">
              <Button
                label="Submit"
                disabled={!beerName || !beerType || !ingredients}
              />
            </div>
          </form>
        </Paper>
      )
    ).toBe(true);
  });
});
