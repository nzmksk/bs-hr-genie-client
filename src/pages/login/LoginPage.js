import { Container, Grid } from "@mui/material";

import {
  LoginFormComponent,
  LoginLogoComponent,
} from "../../components/components.js";

const LoginPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container>
        <Grid item xs={6}>
          <LoginLogoComponent />
        </Grid>
        <Grid item xs={6}>
          <LoginFormComponent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
