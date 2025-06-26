import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          background: {
            default: "#121212",
          },
        }
      : {
          background: {
            default: "#f5f5f5",
          },
        }),
  },
});
