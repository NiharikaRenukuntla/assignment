import React from "react";
import { Grid, Box, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    width: theme.spacing(3.4),
    height: theme.spacing(3.4),
  },
  big: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
}));

const ProfileDataComponent = (props) => {
  const { user } = props;
  const classes = useStyles();
  return (
    <Grid item xs={4} container style={{ position: "relative" }}>
      <Box
        color="#777777"
        fontSize="18px"
        marginLeft={6}
        paddingTop={3}
        position="relative"
      >
        <Typography variant="inherit">Profile</Typography>
      </Box>
      <Grid item xs={12}>
        <Box
          display="flex"
          marginLeft={6}
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
          color="#797979"
          fontSize="14px"
        >
          <Box marginLeft="-80px" clone marginBottom="20px">
            <Avatar src={user.profilepicture} className={classes.big} />
          </Box>
          <Box
            marginLeft="-50px"
            fontSize="18px"
            marginTop="-10px"
            marginBottom="12px"
          >
            <Typography variant="inherit" style={{ color: "#464646" }}>
              {user.name}
            </Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Typography variant="inherit" align="center">
                username
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                style={{ color: "#464646" }}
                align="left"
              >
                {user.userName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="inherit" color="inherit" align="center">
                email
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">:</Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                style={{ color: "#464646" }}
                align="left"
              >
                {user.email}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="inherit" align="center">
                phone
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">:</Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                style={{ color: "#464646" }}
                align="left"
              >
                {user.phone}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="inherit" align="center">
                website
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">:</Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                style={{ color: "#464646" }}
                align="left"
              >
                {user.website}
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <Box marginLeft="-75px" marginBottom="2px">
                <Typography variant="inherit">company </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="inherit" align="center">
                name
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">:</Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                style={{ color: "#464646" }}
                align="left"
              >
                {user.company}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="inherit" align="center">
                catchphrase
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">:</Typography>
            </Grid>

            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                style={{ color: "#464646" }}
                align="left"
              >
                {user.catchphrase}
              </Typography>
            </Grid>
            <Grid item xs={3} align="center">
              <Typography variant="inherit">bs</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subtitle1">:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="subtitle1"
                style={{ color: "#464646" }}
                align="left"
              >
                {user.bs}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileDataComponent;
