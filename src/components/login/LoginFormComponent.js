import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const LoginFormComponent = () => {
  // Styling
  const theme = useTheme();
  const rightContainer = {
    alignItems: "center",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
  };
  const topRightText = {
    alignSelf: "end",
    paddingTop: "2.5%",
    paddingRight: "2.5%",
  };
  const loginForm = {
    alignItems: "center",
    autoComplete: "on",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    justifyContent: "center",
    margin: "auto",
    padding: theme.spacing(4),
    width: "80%",
  };
  const loginText = { alignSelf: "start", fontWeight: 600 };

  return (
    <Container sx={rightContainer}>
      <Typography variant="h5" sx={topRightText}>
        HR GENIE
      </Typography>
      <Box component="form" method="post" sx={loginForm}>
        <Typography variant="h4" sx={loginText}>
          Log In
        </Typography>
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          required
          fullWidth
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: theme.spacing(8) }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginFormComponent;
