import { shallow } from "enzyme";
import DogDetailsView from "./DogDetailsView";
import { useStyles } from "./DogDetailsView.styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import PetsIcon from "@material-ui/icons/Pets";
import { capitalize } from "lodash";
import Button from "../button/Button";

jest.mock("./DogDetailsView.styles");

describe("DogDetailsView", () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      card: "card",
      cardContent: "cardContent",
      typography: "typography",
      avatar: "avatar",
      icon: "icon",
      cardActions: "cardActions",
    });
  });

  const name = "Name";
  const image = "Image";
  const onScoldMock = jest.fn();
  const onBarkMock = jest.fn();
  const disabled = false;

  it("should render correctly", () => {
    const wrapper = shallow(
      <DogDetailsView
        name={name}
        image={image}
        onScold={onScoldMock}
        onBark={onBarkMock}
        disabled={disabled}
      />
    );

    expect(
      wrapper.matchesElement(
        <Card className="card">
          <CardContent className="cardContent">
            <Typography variant="h5" component="h1" className="typography">
              {capitalize(name) ? capitalize(name) : "Name of breed"}
            </Typography>
          </CardContent>
          <Avatar className="avatar" alt={name} src={image}>
            <PetsIcon className="icon" />
          </Avatar>
          <CardActions className="cardActions">
            <Button label="Scold!" onClick={onScoldMock} disabled={disabled} />
            <Button label="Bark!" onClick={onBarkMock} disabled={disabled} />
          </CardActions>
        </Card>
      )
    ).toBe(true);
  });

  it('should render in Typography "Name of breed" if breed is not selected', () => {
    const wrapper = shallow(
      <DogDetailsView
        name=""
        image={image}
        onScold={onScoldMock}
        onBark={onBarkMock}
        disabled={disabled}
      />
    );

    expect(wrapper.find(Typography).first().text()).toBe("Name of breed");
  });
});
