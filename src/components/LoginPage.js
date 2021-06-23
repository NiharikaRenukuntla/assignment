import React from "react";
import UserListComponent from "../components/UserListComponent";
import { Typography, Paper, Box, Grid } from "@material-ui/core";
import { useDetails } from "../context/UsersContext";

const LoginPage = () => {
  const [users] = useDetails();
  return (
    <div
      className="container"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "95vh",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#040b91" />
                <stop offset="100%" stop-color="#8c71d9" />
              </linearGradient>
            </defs>
            <path d="M0 10 C30 28 38 0 64 10 L64 0 L0 0 Z" fill="url(#grad)" />
          </svg>
        </Grid>
        <Grid item xs={1} sm={2} md={2}></Grid>
        <Grid item xs={11} sm={10} md={10}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "20%",
              padding: "20px",
              width: "350px",
            }}
          >
            <Paper>
              <Box p={5} fontSize={20}>
                <Typography variant="inherit">Select an Account</Typography>
              </Box>
              <div
                style={{
                  height: "50vh",
                  overflow: "scroll",
                  paddingLeft: "20px",
                }}
              >
                <UserListComponent users={users} />
              </div>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={1} sm={2} md={2}></Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
