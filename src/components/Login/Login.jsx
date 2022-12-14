import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
//For Form
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
//Icons
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Key from "@mui/icons-material/Key";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#fb9701", //Label color
    fontSize: 17,
  },
  "& label.Mui-focused": {
    color: "#fa2185", //Label-focus
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000000", //Fieldset
    },
    "&:hover fieldset": {
      borderColor: "#fb9701", //Fieldset on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fa2185", //Fieldset on focus
    },
  },
});

const Login = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Connecting to backend
  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data.user) {
      alert("Login successful");
      window.location.href = "/topic";
    } else {
      alert("Check your email id and password!");
    }
  }

  return (
    <form className="form" onSubmit={loginUser}>
      <Box
        className="container"
        sx={{
          maxWidth: 600,
          mx: "auto", // margin left & right
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h3">
          <b>Welcome!</b>
        </Typography>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          Sign in to continue.
        </Typography>

        <IconTextField
          sx={{ color: "white" }}
          label="Email ID"
          type="email"
          placeholder="Enter your email."
          iconStart={<AccountCircle sx={{ color: "#fa2185" }} />}
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <IconTextField
          label="Password"
          type={values.showPassword ? "text" : "password"}
          placeholder="Enter your password."
          // onChange={handleChange("password")}
          iconStart={<Key sx={{ color: "#fa2185" }} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconEnd={
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? (
                <VisibilityOff sx={{ color: "#fa2185" }} />
              ) : (
                <Visibility sx={{ color: "#fa2185" }} />
              )}
            </IconButton>
          }
        />
        <Typography
          variant="body2"
          style={{ color: "#fb9701", fontWeight: "bold" }}
        >
          Forgot Password?
        </Typography>

        <div className="panel pink">
          <button className="btn2" type="submit" value="Login">
            Login
          </button>
        </div>
        <div className="panel borderless">
          <Link to="/signup">
            <button className="btn2">Don't have an account?</button>
          </Link>
        </div>
      </Box>
    </form>
  );
};

const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <CssTextField
      {...props}
      InputProps={{
        ...InputProps,
        style: {
          color: "#000000",
        },
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};
export default Login;
