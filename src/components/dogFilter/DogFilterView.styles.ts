import type { SxProps, Theme } from "@mui/material/styles";

export const styles = {
  paper: {
    padding: "5px",
  },
  flex: {
    display: "flex",
  },
  letter: {
    fontWeight: "bold",
  },
  number: {
    marginLeft: "5px",
    fontSize: 14,
  },
} satisfies Record<string, SxProps<Theme>>;
