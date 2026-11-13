import Grid from "@mui/material/Grid";
import DogWrapper from "./components/dogWrapper/DogWrapper";
import CreateBeerForm from "./components/createBeerForm/CreateBeerForm";
import CreateBeerFormikForm from "./components/createBeerFormikForm/CreateBeerFormikForm";

function App() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DogWrapper />
      </Grid>
      <Grid size={6}>
        <CreateBeerForm />
      </Grid>
      <Grid size={6}>
        <CreateBeerFormikForm />
      </Grid>
    </Grid>
  );
}

export default App;
