import { Alert, AlertTitle, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import React, { Component } from "react";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
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
                  Success
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Thank You For Your Submission —
            <strong>You will get an email with further instructions.!</strong>
          </Alert>
        </React.Fragment>
      </>
    );
  }
}

export default Success;
