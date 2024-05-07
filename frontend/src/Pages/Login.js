import { TextField, Container, Paper, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateInputForLogin } from "../Validations/User";

function Login() {
  const [formState, setFormState] = useState({
    username: { value: "", required: false, error: false, errorMsg: "" },
    password: { value: "", required: false, error: false, errorMsg: "" },
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateInputForLogin(formState, setFormState)) {
      console.log(formState);
    } else {
      return;
    }
  };
  return (
    <Container component={"main"} sx={{ marginTop: "10px" }} maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "10px",
          // margin: "5px",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h5">Login Here</Typography>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
          }}
          onSubmit={handleLoginSubmit}
        >
          <div>
            <TextField
              id="username-login"
              label="Username"
              variant="outlined"
              fullWidth
              value={formState.username.value}
              required={formState.username.required}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  username: {
                    ...formState.username,
                    value: e.target.value,
                    error: false,
                  },
                })
              }
              error={formState.username.error}
              helperText={
                formState.username.error && formState.username.errorMsg
              }
            />
          </div>
          <div>
            <TextField
              id="password-login"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formState.password.value}
              required={formState.password.required}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  password: {
                    ...formState.password,
                    value: e.target.value,
                    error: false,
                  },
                })
              }
              error={formState.password.error}
              helperText={
                formState.password.error && formState.password.errorMsg
              }
            />
          </div>
          <div>
            <Button variant="outlined" color="success" type="submit">
              Login
            </Button>
          </div>
        </form>
        <Typography variant="h6">Not Regigter Yet ? Register Here </Typography>
        <div>
          <Link to="/register">
            <Button variant="text" color="primary">
              Login
            </Button>
          </Link>
        </div>
      </Paper>
    </Container>
  );
}

export default Login;
