import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useToggle } from "../../hooks/hooks.js";

const LoginFormComponent = () => {
  // UI
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
  const loginFormBox = {
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
  const iconColor = { color: theme.palette.text.main };

  // LOGIC
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(sessionStorage.getItem("authentication")) ?? false
  );
  const [isLoading, toggleLoading] = useToggle(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, togglePassword] = useToggle(false);

  // Update form
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  // Submit form
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    toggleLoading();

    try {
      const response = await axios.post(
        "http://localhost:2000/login",
        loginForm
      );

      if (response.status === 200) {
        toggleLoading();
        setIsAuthenticated(!isAuthenticated);
        sessionStorage.setItem(
          "authentication",
          JSON.stringify(!isAuthenticated)
        );
        const accessToken = response.data.token;
        sessionStorage.setItem("hr-genie", JSON.stringify(accessToken));
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toggleLoading();
      console.error(error.response);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" />;
  } else {
    return (
      <Container sx={rightContainer}>
        <Typography variant="h5" sx={topRightText}>
          HR GENIE
        </Typography>
        <Box
          component="form"
          method="post"
          sx={loginFormBox}
          onSubmit={handleSubmitForm}
        >
          <Typography variant="h4" sx={loginText}>
            Log In
          </Typography>
          <TextField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            value={loginForm.email}
            onChange={handleFieldChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={loginForm.password}
            onChange={handleFieldChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <VisibilityOff sx={iconColor} />
                    ) : (
                      <Visibility sx={iconColor} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
            fullWidth
          />
          <Button
            sx={{ marginTop: theme.spacing(8) }}
            type="submit"
            variant="contained"
            fullWidth
          >
            {isLoading ? (
              <CircularProgress color="text" size="1.6rem" />
            ) : (
              "Login"
            )}
          </Button>
        </Box>
      </Container>
    );
  }
};

export default LoginFormComponent;
