import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@mui/material/MenuItem";
import "./style.css";
function Contact() {
  const [query, setQuery] = useState(" ");
  const [data, setData] = useState();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form className="form">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          maxWidth: 800,
          mx: "auto", // margin left & right
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h3">
          <b>Feel Free To Contact Us!!! </b>
        </Typography>

        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="john@xyz.com"
          multiline
        />

        <TextField
          id="outlined-select-query"
          select
          label="Query"
          value={query}
          onChange={handleChange}
          placeholder="Select your query"
        >
          {queries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          placeholder="Enter your comments"
          onChange={(e) => setData(e.target.value)}
        />
        <div className="button-box">
          {data ? (
            <button class="mail-button button--primary">
              <svg
                width="30px"
                height="30px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
              </svg>
              &nbsp;Send Message
            </button>
          ) : (
            <button class="mail-button button--primary" disabled>
              <svg
                width="30px"
                height="30px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
              </svg>
              &nbsp;Send Message
            </button>
          )}

          {data ? (
            <button class="mail-button button--danger button--with-icon">
              <svg viewBox="0 0 24 24">
                <path d="m9 3v1h-5v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-13h1v-2h-5v-1zm0 5h2v9h-2zm4 0h2v9h-2z" />
              </svg>
              Reset Form
            </button>
          ) : (
            <button
              class="mail-button button--danger button--with-icon"
              disabled
            >
              <svg viewBox="0 0 24 24">
                <path d="m9 3v1h-5v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-13h1v-2h-5v-1zm0 5h2v9h-2zm4 0h2v9h-2z" />
              </svg>
              Reset Form
            </button>
          )}
        </div>
      </Box>
    </form>
  );
}

export default Contact;

const queries = [
  {
    value: "Rs",
    label: "Appreciation mail.",
  },
  {
    value: "EUR",
    label: "Leave a complaint.",
  },

  {
    value: "Yuan",
    label: "Content related issue.",
  },
  {
    value: "BTC",
    label: "Found a bug?",
  },
  {
    value: "JPY",
    label: "Any suggestions? We accept  new features.",
  },
  {
    value: "USD",
    label: "Others",
  },
];
