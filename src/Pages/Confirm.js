import {
  Box,
  IconButton,
  Button,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import React, { Component } from "react";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS Form
    this.props.nextStep();
  };

    back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
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
                  Confirm User Data
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
            <List>
              <ListItem primaryText="First Name" secondaryText={firstName} />
              <ListItem primaryText="Last Name" secondaryText={lastName} />
              <ListItem primaryText="Email" secondaryText={email} />
              <ListItem primaryText="Occupation" secondaryText={occupation} />
              <ListItem primaryText="City" secondaryText={city} />
              <ListItem primaryText="Bio" secondaryText={bio} />
            </List>
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

export default Confirm;
