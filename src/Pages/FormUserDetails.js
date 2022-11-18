import { Box, IconButton, Button, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";

import React, { Component } from "react";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handelChange } = this.props;
    return (
      <>
        <React.Fragment>
          <Box sx={{ flexGrow: 1}}>
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
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  Enter User Details
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "25ch" },
            }}
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              hintText="Enter Your First Name"
              onChange={handelChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <TextField
              hintText="Enter Your Last Name"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              onChange={handelChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              hintText="Enter Your Email"
              onChange={handelChange("email")}
              defaultValue={values.email}
            />
            <br />
            <Button 
            variant="contained"
            label='Continue'
            primary={true}
            onClick={this.continue}
            >Continue</Button>
          </Box>
        </React.Fragment>
      </>
    );
  }
}

export default FormUserDetails;
