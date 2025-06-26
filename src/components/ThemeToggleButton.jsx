import React from "react";
import { Button } from "@mui/material";
import { useThemeMode } from "../ThemeContext";

export default function ThemeToggleButton() {
  const { toggleThemeMode, mode } = useThemeMode();

  return (
    <Button variant="contained" onClick={toggleThemeMode}>
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
}
