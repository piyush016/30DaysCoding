import React from "react";
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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Key from "@mui/icons-material/Key";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

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
      borderColor: "#ffffff", //Fieldset
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
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

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
  return (
    <form autoComplete="off" noValidate className="form">
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
        <Typography variant="h5" style={{ color: "#ffffff" }}>
          <b>Don't have an account?</b>
        </Typography>
        <Typography variant="h5" style={{ color: "#ffffff", marginBottom: 20 }}>
          Sign up with us!
        </Typography>

        {/* Form starts */}
        <IconTextField
          sx={{ color: "white" }}
          label="Name"
          type="text"
          placeholder="Name"
          iconStart={<PersonIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="Email ID"
          type="email"
          placeholder="Email"
          iconStart={<EmailIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          label="Password"
          type={values.showPassword ? "text" : "password"}
          placeholder="Password"
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
          label="Confirm Password"
          type={values.showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          onChange={handleChange("password")}
          iconStart={<Key sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="Phone Number"
          type="text"
          placeholder="Phone Number"
          iconStart={<PhoneIphoneIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="College"
          type="text"
          placeholder="College Name"
          iconStart={<SchoolIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="Year of Graduation"
          type="month"
          //   defaultValue= ""
          iconStart={<CalendarTodayIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="City"
          type="text"
          placeholder="City"
          iconStart={<LocationCityIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="State"
          type="text"
          placeholder="State"
          iconStart={<PublicIcon sx={{ color: "#fa2185" }} />}
        />
        <IconTextField
          sx={{ color: "white" }}
          label="Pincode"
          type="text"
          placeholder="Pincode"
          iconStart={<FmdGoodIcon sx={{ color: "#fa2185" }} />}
        />

        <div className="panel pink">
          <button className="btn2">Signup</button>
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
          color: "#ffffff",
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
