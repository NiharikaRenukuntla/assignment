import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  small: {
    width: theme.spacing(3.7),
    height: theme.spacing(3.7),
  },
}));

const UserListComponent = (props) => {
  const classes = useStyles();
  const { users } = props;
  const history = useHistory();
  const viewProfile = (user) => {
    history.push(`/design/${user}`);
  };
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id} alignItems="flex-start">
          <Box fontSize="12px">
            <ListItemAvatar>
              <div onClick={(e) => viewProfile(user.id)}>
                <Avatar
                  className={classes.small}
                  alt={user.name}
                  src={user.profilepicture}
                />
              </div>
            </ListItemAvatar>
          </Box>
          <Box margin={1} onClick={(e) => viewProfile(user.id)}>
            <ListItemText primary={user.name} />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default UserListComponent;

UserListComponent.propTypes = {
  users: PropTypes.array.isRequired,
};

UserListComponent.defaultProps = {
  users: [],
};