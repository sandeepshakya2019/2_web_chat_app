export const validateInputForRegister = (formState, setFormState) => {
  let error = false;
  if (!formState.username.value) {
    error = true;
    setFormState((prevState) => ({
      ...prevState,
      username: {
        ...prevState.username,
        error: true,
        errorMsg: "Please enter a username",
      },
    }));
  }

  if (!formState.email.value) {
    error = true;

    setFormState((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        error: true,
        errorMsg: "Please enter a email",
      },
    }));
  }

  if (!formState.password.value) {
    error = true;

    setFormState((prevState) => ({
      ...prevState,
      password: {
        ...prevState.password,
        error: true,
        errorMsg: "Please enter a password",
      },
    }));
  } else {
    let returnPass = validateStrongPassword(formState.password.value);
    if (returnPass.error) {
      setFormState((prevState) => ({
        ...prevState,
        password: {
          ...prevState.password,
          error: true,
          errorMsg: returnPass.errorMsg,
        },
      }));
      error = returnPass.error;
    } else {
      error = returnPass.error;
    }
  }

  if (error) {
    return false;
  } else {
    return true;
  }
};

export const validateInputForLogin = (formState, setFormState) => {
  let error = false;
  if (!formState.username.value) {
    error = true;
    setFormState((prevState) => ({
      ...prevState,
      username: {
        ...prevState.username,
        error: true,
        errorMsg: "Please enter a username",
      },
    }));
  }

  if (!formState.password.value) {
    error = true;

    setFormState((prevState) => ({
      ...prevState,
      password: {
        ...prevState.password,
        error: true,
        errorMsg: "Please enter a password",
      },
    }));
  } else {
    let returnPass = validateStrongPassword(formState.password.value);
    console.log("return pass", returnPass);
    if (returnPass) {
      setFormState((prevState) => ({
        ...prevState,
        password: {
          ...prevState.password,
          error: true,
          errorMsg: returnPass.errorMsg,
        },
      }));
      error = returnPass.error;
    }
  }

  if (error) {
    return false;
  } else {
    return true;
  }
};

export const validateStrongPassword = (password) => {
  let error = false;
  let errorMsg = "";
  if (password.length < 8) {
    error = true;
    errorMsg = "Password must be at least 8 characters";
    return { error, errorMsg };
  } else if (password.search(/[a-z]/) < 0) {
    error = true;
    errorMsg = "Password must contain at least one lowercase letter";
    return { error, errorMsg };
  } else if (password.search(/[A-Z]/) < 0) {
    error = true;
    errorMsg = "Password must contain at least one uppercase letter";
    return { error, errorMsg };
  } else if (password.search(/[0-9]/) < 0) {
    error = true;
    errorMsg = "Password must contain at least one number";
    return { error, errorMsg };
  } else if (password.length > 12) {
    error = true;
    errorMsg = "Password can not have more than 12 characters";
    return { error, errorMsg };
  } else {
    return { error: false, errorMsg: "" };
  }
};

export const validateImageForRegister = (avatar, setAvatar) => {
  if (!avatar.value) {
    setAvatar({
      ...avatar,
      error: true,
      errorMsg: "Please Upload avatar",
      value: "",
      data: null,
    });
    return false;
  }
  if (avatar.value) {
    if (
      avatar.data.type === "image/jpeg" ||
      avatar.data.type === "image/jpg" ||
      avatar.data.type === "image/png"
    ) {
      return true;
    } else {
      setAvatar({
        ...avatar,
        error: true,
        errorMsg: "Please Upload Image File ONLY",
        value: "",
        data: null,
      });
      return false;
    }
  }
  return true;
};
