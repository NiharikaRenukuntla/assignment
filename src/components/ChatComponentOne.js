import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Avatar,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandLess from "@material-ui/icons/ExpandLess";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useDetails } from "../context/UsersContext";
import ChatComponentTwo from "./ChatComponentTwo";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
  },
  dropdown: {
    position: "absolute",
    top: -40,
    right: 0,
    zIndex: 1,
    border: "1px solid",
    backgroundColor: theme.palette.background.paper,
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

export default function ChatComponentOne(props) {
  const classes = useStyles();
  const { user } = props;
  const [users] = useDetails();
  const [chat, setChat] = useState({});
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const getChat = (id) => {
    let chat = users.find((el) => el.id === parseInt(id));
    setChat(chat);
    setChatOpen((prev) => !prev);
  };
  return (
    <Box>
      <Box
        style={{
          width: "18%",
          position: "absolute",
          right: "10px",
          bottom: "-15px",
        }}
      >
        {open ? (
          <div>
            <Box
              bgcolor="#0000FF"
              flex
              justifyContent="space-between"
              width="100%"
              borderRadius="10px 10px 0px 0px"
              color="white"
            >
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <ChatIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Chat" />
                {open ? <ExpandMore /> : <ExpandLess />}
              </ListItem>
            </Box>
            <Box
              style={{
                border: "0px 1px 0px 1px",
                borderColor: "#0000FF",
                height: "35vh",
                overflowY: "scroll",
                overflowX: "hidden",
              }}
            >
              {users.map((el) => (
                <div style={{ backgroundColor: "white", position: "relative" }}>
                  <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  ></List>
                  <Grid container spacing={2}>
                    <Grid item xs={3} align="right">
                      <Avatar
                        src={el.profilepicture}
                        className={classes.verySmal}
                        onClick={(e) => getChat(el.id)}
                      />
                    </Grid>
                    <Grid item xs={7} align="left" style={{ marginTop: "1px" }}>
                      <Typography variant="caption" onClick={(e) => getChat(el.id)}>{el.name}</Typography>
                    </Grid>
                    <Grid item xs={2} align="left" style={{ marginTop: "1px" }}>
                      <Box style={{ fontSize: "8px" }} color="green" clone>
                        <FiberManualRecordIcon />
                      </Box>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Box>
          </div>
        ) : (
          ""
        )}
        <div>
          {!open ? (
            <Box
              bgcolor="#0000FF"
              flex
              justifyContent="space-between"
              width="100%"
              borderRadius="10px 10px 0px 0px"
              color="white"
              position="relative"
            >
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <ChatIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Chat" />
                {open ? <ExpandMore /> : <ExpandLess />}
              </ListItem>
            </Box>
          ) : (
            ""
          )}
        </div>
      </Box>
      <Box position="absolute" width="30%" height="20vh" bottom="0px" right="100px" p={1}>
        <ChatComponentTwo chat={chat} open={chatOpen} />
      </Box>
    </Box>
  );
}
