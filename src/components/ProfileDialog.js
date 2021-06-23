import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  ListItemAvatar,
  Box,
  ListItemText,
  List,
  ListItem,
  Button
} from "@material-ui/core";
import { useDetails } from "../context/UsersContext";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  big: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function SimpleDialog(props) {
  const [users] = useDetails();
  const location = useLocation();
  console.log(location.pathname);
  const classes = useStyles();
  const { onClose, selectedValue, open, user } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  const goToLogin = () => {
    window.location.pathname = `/`;
  };
  return (
    <div>
      {open && (
        <div
          style={{
            width: "200px",
            height: "150px",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            position: "absolute",
            top: "30px",
            right: "10px",
            width: "20%",
            height: "50%",
          }}
          onClick={handleClose}
        >
          <List>
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
              <Box m="auto">{user.name}</Box>
            </ListItem>
            <ListItem>
              <Box m="auto" fontSize="10px">
                {user.email}
              </Box>
            </ListItem>
            <ListItem>
              <hr style={{ width: "60%" }} />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  className={classes.small}
                  alt={users[3].name}
                  src={users[3].profilepicture}
                />
              </ListItemAvatar>
              <ListItemText secondary={users[3].name} />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  className={classes.small}
                  alt={users[4].name}
                  src={users[4].profilepicture}
                />
              </ListItemAvatar>
              <ListItemText secondary={users[4].name} />
            </ListItem>
            <Box style={{ textDecoration: "none" }} clone>
              <Button onClick={goToLogin}>Sign Out</Button>
            </Box>
          </List>
        </div>
      )}
    </div>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

SimpleDialog.defaultProps = {
  onClose: () => {},
  opne: false,
  selectedValue : ''
}

export default SimpleDialog;
