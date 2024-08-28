import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color={"primary"} fontWeight="bold">
        <a href="/" id="cognito-logo">Cognito</a>
      </Typography>

      <a href="/register" p={1}>
        SignUp
      </a>

      <a href="/login" p={1}>
        LogIn
      </a>
    </Box>
  );
};

export default Navbar;
