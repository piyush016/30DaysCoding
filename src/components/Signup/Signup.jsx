import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
//For Form
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
//Icons
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Key from "@mui/icons-material/Key";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SchoolIcon from "@mui/icons-material/School";

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

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        college,
      }),
    });
    const data = await response.json();

    if (data.status === "ok") {
      navigate("/login");
    }
  }

  return (
    <form
      autoComplete="off"
      noValidate
      className="form"
      onSubmit={registerUser}
    >
      <Box
        className="container"
        sx={{
          maxWidth: 600,
          mx: "auto", // margin left & right
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h3">
          <b>Don't have an account?</b>
        </Typography>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          Sign up with us!
        </Typography>

        {/* Form starts */}
        <IconTextField
          sx={{ color: "white" }}
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          iconStart={<PersonIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="Email ID"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          iconStart={<EmailIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconStart={<Key sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          label="Confirm Password"
          type={values.showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          onChange={handleChange("password")}
          iconStart={<Key sx={{ color: "#fa2185" }} />}
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
        <IconTextField
          sx={{ color: "white" }}
          label="Phone Number"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          iconStart={<PhoneIphoneIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="College"
          type="text"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          placeholder="College Name"
          iconStart={<SchoolIcon sx={{ color: "#fa2185" }} />}
        />

        <div className="panel pink">
          <button className="btn2" type="submit">
            Signup
          </button>
        </div>
        <div className="panel borderless">
          <Link to="/login">
            <button className="btn2">Already have an account?</button>
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
export default Signup;
