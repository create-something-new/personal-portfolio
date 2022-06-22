import { useEffect, useMemo, useState } from "react";
import { ColorModeContext } from "../context/ColorModeContext.jsx";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./customTheme";

const getCurrentTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const SwitchTheme = (props) => {
  const [mode, setMode] = useState(getCurrentTheme() ? "dark" : "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  const mqListener = (e) => {
    setMode(e.matches ? "dark" : "light");
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
