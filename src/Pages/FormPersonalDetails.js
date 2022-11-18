import { Box, IconButton, Button, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";

import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handelChange } = this.props;
    return (
      <>
        <React.Fragment>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Enter Personal Details
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <TextField
              id="outlined-basic"
              label="Occupation"
              variant="outlined"
              hintText="Enter Your Occupation"
              onChange={handelChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <TextField
              hintText="Enter Your City"
              id="outlined-basic"
              label="City"
              variant="outlined"
              onChange={handelChange("city")}
              defaultValue={values.city}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Bio"
              variant="outlined"
              hintText="Enter Your Bio"
              onChange={handelChange("bio")}
              defaultValue={values.bio}
            />
            <br />
            <Button
              variant="contained"
              label="Back"
              color="error"
              primary={false}
              onClick={this.back}
            >
              Back
            </Button>
            <Button
              variant="contained"
              label="Continue"
              primary={true}
              onClick={this.continue}
            >
              Continue
            </Button>
          </Box>
        </React.Fragment>
      </>
    );
  }
}

export default FormPersonalDetails;
