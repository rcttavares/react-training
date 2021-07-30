import { shallow } from "enzyme";
import { useStyles } from "./DogWrapperView.styles";
import DogWrapperView from "./DogWrapperView";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import DogFilter from "../dogFilter/DogFilter";
import DogDetails from "../dogDetails/DogDetails";
import DogList from "../dogList/DogList";

jest.mock("./DogWrapperView.styles.ts");

describe("DogWrapperView", () => {
  beforeEach(() => {
    (useStyles as jest.Mock).mockReturnValue({
      loading: "loading",
    });
  });

  it("should render correctly", () => {
    const loading = false;

    const wrapper = shallow(
      <DogWrapperView
        loading={loading}
      />
    );

    expect(
      wrapper.matchesElement(
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DogFilter />
          </Grid>

          <Grid item xs={4}>
            <DogDetails />
          </Grid>

          <Grid item xs={8}>
            {loading ? (
              <Skeleton
                variant="rect"
                animation="wave"
                height={336}
                className="loading"
              />
            ) : (
              <DogList />
            )}
          </Grid>
        </Grid>
      )
    ).toBe(true);
  });
});
