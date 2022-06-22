import "./App.css";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { ColorModeContext } from "./context/ColorModeContext.jsx";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

function App() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        <Stack direction="column">
          <Button
            sx={{ ml: 1, fontWeight: "regular", fontSize: "3em" }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode}
          </Button>

          <Button
            sx={{
              ml: 1,
              fontWeight: "regular",
              fontSize: "3em",
            }}
            color="inherit"
            disabled
          >
            Disabled
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
