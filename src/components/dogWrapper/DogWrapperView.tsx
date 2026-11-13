import { styles } from "./DogWrapperView.styles";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import DogFilter from "../dogFilter/DogFilter";
import DogDetails from "../dogDetails/DogDetails";
import DogList from "../dogList/DogList";
import { DogWrapperProps } from "./DogWrapper.types";

function DogWrapperView({ isLoading }: DogWrapperProps) {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DogFilter />
      </Grid>

      <Grid size={4}>
        <DogDetails />
      </Grid>

      <Grid size={8}>
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            height={336}
            sx={styles.loading}
          />
        ) : (
          <DogList />
        )}
      </Grid>
    </Grid>
  );
}

export default DogWrapperView;
