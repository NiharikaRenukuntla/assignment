import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemAvatar, Avatar, ListItemIcon, ListItemText, Box, Collapse } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useDetails } from "../context/UsersContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [users] = useDetails();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Box bgcolor='silver'>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              className={classes.small}
              alt={users[3].name}
              src={users[3].profilepicture}
            />
          </ListItemAvatar>
          <ListItemText secondary={users[3].name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              className={classes.small}
              alt={users[4].name}
              src={users[4].profilepicture}
            />
          </ListItemAvatar>
          <ListItemText secondary={users[4].name} />
        </ListItem>
      </Collapse>
      </Box>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <Box bgcolor="#5522cc" flex justifyContent="space-between" width="100%">
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
            {open ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
        </Box>
      </List>
    </Box>
  );
}
