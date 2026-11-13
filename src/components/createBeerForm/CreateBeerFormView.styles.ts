import type { SxProps, Theme } from "@mui/material/styles";

export const styles = {
  paper: {
    padding: "20px",
  },
  typography: {
    fontWeight: 600,
    textAlign: "center",
  },
  container: {
    marginTop: "10px",
  },
  button: {
    marginTop: "20px",
    textAlign: "center",
  },
} satisfies Record<string, SxProps<Theme>>;
