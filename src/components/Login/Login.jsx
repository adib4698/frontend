import React, { Component } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Login.scss";
import { BrowserRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";

const style = {
  background:
    "linear-gradient(90deg, rgba(240,193,81,1) 0%, rgba(247,180,20,1) 100%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 40,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  margin: 20,
  "&:hover": {
    backgroundColor: "#fff",
  },
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#f0c151",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f0c151",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f0c151",
      },
      "&:hover fieldset": {
        borderColor: "#f0c151",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f0c151",
      },
    },
  },
  input: {
    color: "white",
  },
})(TextField);

export class Login extends Component {
  state = {};
  render() {
    return (
      <div className="base-container">
        <div className="content">
          <CssTextField
            margin="normal"
            required
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            color="rgba(255, 105, 135, .3)"
          />
          <CssTextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            color="#ffffff"
          />
          <Button style={style} size="medium" type="submit">
            Login
          </Button>
          <BrowserRouter>
            <NavLink to="/Register" exact strict className="nav">
              <p className="register">Not a member yet? Sign up here!</p>
            </NavLink>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {}
export default connect(mapStateToProps)(Login);
