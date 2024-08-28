import "./App.css";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from "./components/navbar";
import HomePage from "./page/homePage";
import Register from "./page/register";
import Login from "./page/login";

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
