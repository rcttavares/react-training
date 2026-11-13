import type { SxProps, Theme } from "@mui/material/styles";

export const styles = {
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
} satisfies Record<string, SxProps<Theme>>;
