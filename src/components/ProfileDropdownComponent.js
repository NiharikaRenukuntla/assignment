import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {
  Avatar,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Divider,
  Typography,
} from "@material-ui/core";
import { useDetails } from "../context/UsersContext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 40,
    right: 0,
    zIndex: 1,
    border: "1px solid",
    backgroundColor: theme.palette.background.paper,
    height: "30vh",
    padding: "10px",
    width: "100%",
    left: -10,
  },
  big: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  verySmal: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
  },
}));

export default function ProfileDropdownComponent(props) {
  const classes = useStyles();
  const { user } = props;
  console.log(user);
  const [users] = useDetails();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log("open");
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const goToLogin = () => {
    window.location.pathname = "/";
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={classes.root}
        style={{
          position: "absolute",
          top: "20px",
          right: "10px",
          width: "20%",
        }}
      >
        <Grid container>
          <Grid item xs={5} align="right">
            <Box marginLeft={2} onClick={handleClick}>
              <Avatar src={user.profilepicture} className={classes.small} />
            </Box>
          </Grid>
          <Grid item xs={5} onClick={handleClick} align="right">
            <Typography variant="caption">{user.name}</Typography>
          </Grid>
        </Grid>
        {open ? (
          <div>
            <Box
              width="70%"
              height="35vh"
              marginLeft="30px"
              borderRadius="15px"
              flex
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              bgcolor="#ffffff"
              lineHeight="1px"
              marginTop="15px"
            >
              <List style={{ lineHeight: "5px" }}>
                <ListItem alignItems="flex-start">
                  <Box m="auto">
                    <ListItemAvatar>
                      <Avatar
                        className={classes.big}
                        alt={user.name}
                        src={user.profilepicture}
                      />
                    </ListItemAvatar>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box m="auto" fontSize="12px" color="#363636">
                    {user.name}
                  </Box>
                </ListItem>
                <ListItem>
                  <Box m="auto" fontSize="10px" color="#676767">
                    {user.email}
                  </Box>
                </ListItem>
                <ListItem>
                  <Box color="#898989" marginLeft="20px" clone>
                    <Divider width="90%" variant="fullwidth" />
                  </Box>
                </ListItem>
                <Box m="auto" marginBottom="3px">
                  <Grid container spacing={1}>
                    <Grid item xs={4} align="right">
                      <Avatar
                        className={classes.small}
                        alt={users[3].name}
                        src={users[3].profilepicture}
                      />
                    </Grid>
                    <Grid item xs={8} align="left">
                      <Box fontSize="10px" color="#676767" m={1}>
                        {users[3].name}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box m="auto" marginTop="15px" marginBottom="20px">
                  <Grid container>
                    <Grid item xs={4} align="right">
                      <Avatar
                        className={classes.verySmal}
                        alt={users[4].name}
                        src={users[4].profilepicture}
                      />
                    </Grid>
                    <Grid item xs={8} align="left">
                      <Box color="#676767" fontSize="9px" m={1}>
                        {users[4].name}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  style={{
                    textDecoration: "none",
                    backgroundColor: "#ff5733",
                    borderRadius: "25px",
                    color: "white",
                    height: "28px",
                    padding: "12px",
                    marginTop:"5px"
                  }}
                  clone
                >
                  <Button onClick={goToLogin}>
                    <Typography variant="caption">Sign Out</Typography>
                  </Button>
                </Box>
              </List>
            </Box>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}