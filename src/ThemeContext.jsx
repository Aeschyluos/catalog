import React, { createContext, useMemo, useState, useContext } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { getDesignTokens } from "./theme";

const ThemeModeContext = createContext({ toggleThemeMode: () => {} });

export const useThemeMode = () => useContext(ThemeModeContext);

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
