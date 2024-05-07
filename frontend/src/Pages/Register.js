import React, { useRef, useState } from "react";
import {
  TextField,
  Container,
  Paper,
  Typography,
  Button,
  Avatar,
  Stack,
  avatarClasses,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  validateImageForRegister,
  validateInputForRegister,
} from "../Validations/User";

function Register() {
  const fileUploadRef = useRef(null);

  const [formState, setFormState] = useState({
    username: { value: "", required: false, error: false, errorMsg: "" },
    password: { value: "", required: false, error: false, errorMsg: "" },
    email: { value: "", required: false, error: false, errorMsg: "" },
    bio: { value: "", required: false, error: false, errorMsg: "" },
  });

  const [avatar, setAvatar] = useState({
    value: "",
    data: null,
    required: false,
    error: false,
    errorMsg: "",
  });

  const handleAvatarClick = (e) => {
    e.preventDefault();
    fileUploadRef.current.click(); // ADDED
  };

  const handleChange = (e) => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    setAvatar({
      ...avatar,
      error: false,
      errorMsg: "",
      value: cachedURL,
      data: uploadedFile,
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (
      validateImageForRegister(avatar, setAvatar) &&
      validateInputForRegister(formState, setFormState)
    ) {
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
          padding: "0.5rem",
          // margin: "5px",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h5">Register Here</Typography>
        </div>

        <Stack>
          <Avatar
            alt={formState.username.value || "defualtImage"}
            src={avatar.value}
            sx={{
              height: "8rem",
              width: "8rem",
              marginBottom: "1rem",
              marginTop: "1rem",
              cursor: "pointer",
              ":hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
            onClick={handleAvatarClick}
          />

          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleChange}
            ref={fileUploadRef}
            accept="image/*"
          />
        </Stack>

        {avatar.error && (
          <Typography variant="h6" sx={{ color: "red" }}>
            {avatar.errorMsg}
          </Typography>
        )}

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
            marginBottom: "0.2rem",
          }}
          onSubmit={handleRegisterSubmit}
        >
          <div>
            <TextField
              id="username-register"
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
              id="email-register"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              value={formState.email.value}
              required={formState.email.required}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: {
                    ...formState.email,
                    value: e.target.value,
                    error: false,
                  },
                })
              }
              error={formState.email.error}
              helperText={formState.email.error && formState.email.errorMsg}
            />
          </div>
          <div>
            <TextField
              id="password-register"
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
            <TextField
              id="bio-register"
              label="Bio"
              variant="outlined"
              fullWidth
              value={formState.bio.value}
              required={formState.bio.required}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  bio: {
                    ...formState.bio,
                    value: e.target.value,
                    error: false,
                  },
                })
              }
              error={formState.bio.error}
              helperText={formState.bio.error && formState.bio.errorMsg}
            />
          </div>
          <div style={{ marginLeft: "30%" }}>
            <Button variant="outlined" color="success" type="submit">
              Register
            </Button>
          </div>
        </form>
        <Typography variant="h6">Registered Already ? Login Here </Typography>
        <div>
          <Link to="/login">
            <Button variant="text" color="primary">
              Login
            </Button>
          </Link>
        </div>
      </Paper>
    </Container>
  );
}

export default Register;
