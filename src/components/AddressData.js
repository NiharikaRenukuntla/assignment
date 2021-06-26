import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

const AddressData = (props) => {
  const { userDetails } = props;
  return (
    <Box
      flex
      justifyContent="center"
      paddingTop={8}
      marginLeft={2}
      alignItems="center"
      flexDirection="column"
      fontSize="14px"
      color="#888888"
      width="100%"
      position="relative"
    >
      <Grid item xs={12}>
        <Box m={1} width="70%">
          <Grid container spacing={2}>
          <Grid item xs={12} align="left">
          <Box> 
          <Typography variant="inherit" style={{ color: "#555555",fontSize:"14px"}}>
            Address
          </Typography>
          </Box>
          </Grid>
            <Grid item xs={4} align="right">
              <Typography variant="inherit">street</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="caption"
                align="center"
                style={{ color: "blue" }}
              >
                :
              </Typography>
            </Grid>
            <Grid item xs={7} align="left">
              <Typography variant="body1" style={{ color: "#555555" }}>
                {userDetails.address.street}
              </Typography>
            </Grid>

            <Grid item xs={4} align="right">
              <Typography variant="inherit">suite</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="caption"
                align="center"
                style={{ color: "blue" }}
              >
                :
              </Typography>
            </Grid>
            <Grid item xs={7} align="left">
              <Typography variant="body1" style={{ color: "#555555" }}>
                {userDetails.address.suite}
              </Typography>
            </Grid>

            <Grid item xs={4} align="right">
              <Typography variant="inherit">city</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="caption"
                align="center"
                style={{ color: "blue" }}
              >
                :
              </Typography>
            </Grid>
            <Grid item xs={7} align="left">
              <Typography variant="body1" style={{ color: "#555555" }}>
                {userDetails.address.city}
              </Typography>
            </Grid>

            <Grid item xs={4} align="right">
              <Typography variant="inherit">zipcode</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="caption"
                align="center"
                style={{ color: "blue" }}
              >
                :
              </Typography>
            </Grid>
            <Grid item xs={7} align="left">
              <Typography variant="body1" style={{ color: "#555555" }}>
                {userDetails.address.zipcode}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default AddressData;
