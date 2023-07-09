import { Container, Typography, useTheme } from "@mui/material";

import logo from "../../assets/logo.png";

const LoginLogoComponent = () => {
  // UI
  const theme = useTheme();
  const leftContainer = {
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
  };

  return (
    <Container sx={leftContainer}>
      <img
        src={logo}
        alt="Logo"
        style={{ maxHeight: "50%", maxWidth: "100%" }}
      />
      <Typography variant="h4">HR GENIE</Typography>
      <Typography variant="h5">Fulfilling wishes at work</Typography>
    </Container>
  );
};

export default LoginLogoComponent;
