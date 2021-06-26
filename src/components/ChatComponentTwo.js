import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";

export default function ChatComponentTwo(props) {
  const { open } = props;
  const { chat } = props;
  return (
    <Box
      style={{
        position: "absolute",
        left: "-10px",
        width: "60%",
        height: "15vh",
      }}
    >
      {open ? (
        <div>
          <Box
            bgcolor="#0000FF"
            flex
            justifyContent="space-between"
            borderRadius="10px 10px 0px 0px"
            color="white"
          >
            <ListItem button>
              <ListItemIcon>
                <img
                  style={{ color: "white" }}
                  src={chat.profilepicture}
                  width="30px"
                  height="30px"
                />
              </ListItemIcon>
              <ListItemText primary={chat.name}/>
              {open ? <close /> : ""}
            </ListItem>
          </Box>
          <Box
            style={{
              overflowY: "scroll",
              overflowX: "hidden",
              border: "1px solid blue",
              borderBottom: "0px",
            }}
          >
            <div style={{ backgroundColor: "white", padding: "10px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} align="left">
                  <Typography variant="caption">helooo</Typography>
                </Grid>
                <Grid item xs={12} align="right" style={{ marginTop: "1px" }}>
                  <Typography variant="caption">hi</Typography>
                </Grid>
                <Grid item xs={12} align="left" style={{ marginTop: "1px" }}>
                  <Typography variant="caption">hi</Typography>
                </Grid>
              </Grid>
            </div>
          </Box>
        </div>
      ) : (
        ""
      )}
    </Box>
  );
}
