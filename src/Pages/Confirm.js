import {
  Box,
  IconButton,
  Button,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Dialog,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import React, { Component } from "react";

export class Confirm extends Component {
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
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  Confirm User Data
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>

          <Box>
            <List sx={{ display:'inline-block' }}>
              <ListItem >
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
            <br />
          </Box>
          <Box
            sx={{
              "& > :not(style)": { m: 2, width: "25ch" },
            }}
          >
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
              label="Confirm & Continue"
              primary={true}
              onClick={this.continue}
            >
              Confirm & Continue
            </Button>
          </Box>
        </React.Fragment>
      </>
    );
  }
}

export default Confirm;
