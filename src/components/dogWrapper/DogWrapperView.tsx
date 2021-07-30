import { useStyles } from "./DogWrapperView.styles";
import Grid from '@material-ui/core/Grid';
import { Skeleton } from "@material-ui/lab";
import DogFilter from "../dogFilter/DogFilter";
import DogDetails from "../dogDetails/DogDetails";
import DogList from "../dogList/DogList";

interface Props {
  loading: boolean;
}

function DogWrapperView({ loading }: Props) {
  const classes = useStyles();

  return (
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
            className={classes.loading}
          />
        ) : (
          <DogList />
        )}
      </Grid>
    </Grid>
  );
}

export default DogWrapperView;
