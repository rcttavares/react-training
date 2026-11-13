import type { SxProps, Theme } from "@mui/material/styles";

export const styles = {
  card: {
    textAlign: "center",
    padding: "20px",
  },
  cardContent: {
    padding: 0,
  },
  typography: {
    fontWeight: 600,
    marginBottom: "20px",
  },
  avatar: {
    margin: "0 auto",
    width: "188px",
    height: "188px",
  },
  icon: {
    width: "120px",
    height: "120px",
  },
  cardActions: {
    justifyContent: "center",
    padding: 0,
    marginTop: "20px",
  },
} satisfies Record<string, SxProps<Theme>>;
