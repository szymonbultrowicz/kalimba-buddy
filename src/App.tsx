import React, { useState } from "react";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  createTheme,
  GlobalStyles,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { NavMenu } from "./navigation/NavMenu";

const globalStylesDark = (
  <GlobalStyles
    styles={{
      body: {
        background: "#000000",
      },
    }}
  />
);

const globalStylesLight = <GlobalStyles styles={{}} />;

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const [navMenuOpened, setNavMenuOpened] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {prefersDarkMode ? globalStylesDark : globalStylesLight}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setNavMenuOpened(!navMenuOpened)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Kalimba buddy</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ textAlign: "center", flexGrow: 1 }}>
          <Outlet />
        </Box>
        <NavMenu open={navMenuOpened} onClose={() => setNavMenuOpened(false)} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
