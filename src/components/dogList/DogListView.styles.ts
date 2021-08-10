import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  box: {
    width: "100%",
    minHeight: "336px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  list: {
    padding: 0,
  },
  paper: {
    maxHeight: "336px",
    overflow: "auto",
  },
});
